use std::collections::BTreeMap;

use hdk::prelude::*;
use roles_integrity::{
    AllRoleClaimsDeletedProof, EntryTypes, PendingUnassignmentLinkTag, RoleClaim, UnitEntryTypes,
};

use crate::{
    profiles::{get_agents_for_profile, get_my_profile_hash},
    unassignments::get_pending_unassignment_links_for_profile,
    utils::{create_relaxed, delete_link_relaxed},
};

#[hdk_extern(infallible)]
pub fn create_all_role_claims_deleted_proofs_if_possible(
    _schedule: Option<Schedule>,
) -> Option<Schedule> {
    if let Err(err) = internal_create_all_role_claims_deleted_proofs_if_possible() {
        error!("Error calling create_all_role_claims_deleted_proofs_if_necessary: {err:?}");
    }
    Some(Schedule::Persisted("*/30 * * * * * *".into()))
}

fn internal_create_all_role_claims_deleted_proofs_if_possible() -> ExternResult<()> {
    let Some(my_profile_hash) = get_my_profile_hash()? else {
        return Ok(()); // We don't have a profile yet so we can't have any roles assigned
    };

    let pending_unassignment_links_for_me =
        get_pending_unassignment_links_for_profile(my_profile_hash.clone())?;

    if pending_unassignment_links_for_me.len() == 0 {
        // I have no pending unassignments: do nothing
        return Ok(());
    }

    let all_my_agents_activities = get_all_my_agents_role_claims_activities(&my_profile_hash)?;

    for my_pending_unassignment_link in pending_unassignment_links_for_me {
        create_all_role_claims_deleted_proof_if_possible(
            my_pending_unassignment_link,
            &my_profile_hash,
            &all_my_agents_activities,
        )?;
    }
    Ok(())
}

pub fn get_all_my_agents_role_claims_activities(
    my_profile_hash: &ActionHash,
) -> ExternResult<BTreeMap<AgentPubKey, AgentActivity>> {
    let all_my_agents = get_agents_for_profile(my_profile_hash.clone())?;
    let mut all_my_agents_activities: BTreeMap<AgentPubKey, AgentActivity> = BTreeMap::new();
    let role_claim_entry_type: EntryType = UnitEntryTypes::RoleClaim.try_into()?;
    let creates_and_deletes_role_claims_query_filter = ChainQueryFilter::new()
        .entry_type(role_claim_entry_type)
        .action_type(ActionType::Create)
        .action_type(ActionType::Delete);

    for agent in all_my_agents {
        let activity = get_agent_activity(
            agent.clone(),
            creates_and_deletes_role_claims_query_filter.clone(),
            ActivityRequest::Full,
        )?;
        all_my_agents_activities.insert(agent, activity);
    }

    Ok(all_my_agents_activities)
}

/** If all my agents have deleted their role claim, create the AllRoleClaimsDeletedProof and delete the links */
pub fn create_all_role_claims_deleted_proof_if_possible(
    my_pending_unassignment_link: Link,
    my_profile_hash: &ActionHash,
    all_my_agents_activity: &BTreeMap<AgentPubKey, AgentActivity>,
) -> ExternResult<()> {
    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(
        my_pending_unassignment_link.tag.into_inner(),
    ));

    let Ok(tag) = PendingUnassignmentLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "RoleToAssignee links must contain a PendingUnassignmentLinkTag in their LinkTag",
        ))));
    };
    let assign_role_create_link_hash = tag.assign_role_create_link_hash;
    let mut role_claims_deletes_hashes: BTreeMap<AgentPubKey, ActionHash> = BTreeMap::new();
    for (agent, activity) in all_my_agents_activity {
        let maybe_role_claim_deletes =
            get_deleted_role_claim_for(activity, &assign_role_create_link_hash)?;
        let Some(role_claim_delete) = maybe_role_claim_deletes else {
            return Ok(());
        };
        role_claims_deletes_hashes.insert(agent.clone(), role_claim_delete);
    }

    let proof = AllRoleClaimsDeletedProof {
        assign_role_create_link_hash: assign_role_create_link_hash.clone(),
        profile_hash: my_profile_hash.clone(),
        role_claims_deletes_hashes,
        lost_agents: vec![],
    };
    create_relaxed(EntryTypes::AllRoleClaimsDeletedProof(proof))?;
    delete_link_relaxed(assign_role_create_link_hash)?;
    delete_link_relaxed(my_pending_unassignment_link.create_link_hash)?;

    Ok(())
}

fn get_deleted_role_claim_for(
    activity: &AgentActivity,
    assign_role_create_link_hash: &ActionHash,
) -> ExternResult<Option<ActionHash>> {
    let get_inputs: Vec<GetInput> = activity
        .valid_activity
        .iter()
        .map(|(_, action_hash)| GetInput::new(action_hash.clone().into(), GetOptions::default()))
        .collect();

    let maybe_records = HDK.with(|hdk| hdk.borrow().get(get_inputs))?;

    let records = maybe_records
        .into_iter()
        .map(|r| {
            r.ok_or(wasm_error!(WasmErrorInner::Guest(format!(
                "Could not get Record for my agent activity"
            ))))
        })
        .collect::<ExternResult<Vec<Record>>>()?;

    let role_claim_entry_type: EntryType = UnitEntryTypes::RoleClaim.try_into()?;

    for record in &records {
        let Action::Create(create) = record.action() else {
            continue;
        };

        if create.entry_type.eq(&role_claim_entry_type) {
            continue;
        }

        let Some(entry) = record.entry().as_option() else {
            return Err(wasm_error!(WasmErrorInner::Guest(format!(
                "RoleClaim record did not have an entry"
            ))));
        };

        let role_claim = RoleClaim::try_from(entry.clone())?;

        if role_claim
            .assign_role_create_link_hash
            .ne(assign_role_create_link_hash)
        {
            continue;
        }

        let delete_record = records.iter().find(|record| {
            let Action::Delete(delete) = record.action() else {
                return false;
            };
            delete.deletes_address.eq(record.action_address())
        });

        return Ok(delete_record.map(|r| r.action_address().clone()));
    }

    Ok(None)
}
