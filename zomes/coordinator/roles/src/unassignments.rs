use hdk::prelude::*;
use roles_integrity::*;

use crate::{
    all_role_claims_deleted_proof::{
        create_all_role_claims_deleted_proof_if_possible,
        create_all_role_claims_deleted_proofs_if_possible,
        get_all_my_agents_role_claims_activities,
    },
    profiles::get_my_profile_hash,
    role_claim::query_undeleted_role_claims_for_role,
    utils::delete_relaxed,
};

///Generating path to pending_unassignments
fn pending_unassignments_path() -> Path {
    Path::from("pending_unassignments")
}

///Creating requests for people to unassign roles
#[hdk_extern]
pub fn request_unassign_role(input: RequestUnassignRoleInput) -> ExternResult<()> {
    let tag = PendingUnassignmentLinkTag {
        role: input.role,
        assign_role_create_link_hash: input.assign_role_create_link_hash,
    };
    let tag_bytes = SerializedBytes::try_from(tag).map_err(|err| wasm_error!(err))?;
    create_link(
        pending_unassignments_path().path_entry_hash()?,
        input.assignee_profile_hash.clone(),
        LinkTypes::PendingUnassignments,
        tag_bytes.bytes().clone(),
    )?;

    Ok(())
}

#[hdk_extern(infallible)]
pub fn unassign_pending_unassignments(_schedule: Option<Schedule>) -> Option<Schedule> {
    if let Err(err) = internal_unassign_pending_unassignments() {
        error!("Error calling unassign_pending_unassignments: {err:?}");
    }
    Some(Schedule::Persisted("*/30 * * * * * *".into()))
}

/** If I have a PendingUnassignment link for me but I still have an undeleted RoleClaim for it, delete the role claim */
fn internal_unassign_pending_unassignments() -> ExternResult<()> {
    let Some(my_profile_hash) = get_my_profile_hash()? else {
        return Ok(()); // We don't have a profile yet so we can't have any roles assigned
    };

    let pending_unassignment_links_for_me =
        get_pending_unassignment_links_for_profile(my_profile_hash.clone())?;

    for my_pending_unassignment_link in pending_unassignment_links_for_me {
        let tag_bytes = SerializedBytes::from(UnsafeBytes::from(
            my_pending_unassignment_link.tag.clone().into_inner(),
        ));

        let Ok(tag) = PendingUnassignmentLinkTag::try_from(tag_bytes) else {
            return Err(wasm_error!(WasmErrorInner::Guest(format!(
                "RoleToAssignee links must contain a PendingUnassignmentLinkTag in their LinkTag",
            ))));
        };

        let role_claims = query_undeleted_role_claims_for_role(tag.role)?;

        for role_claim_record in role_claims {
            let Some(entry) = role_claim_record.entry().as_option() else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "RoleClaim record has no entry associated with it"
                ))));
            };

            let role_claim = RoleClaim::try_from(entry.clone())?;
            if role_claim
                .assign_role_create_link_hash
                .eq(&tag.assign_role_create_link_hash)
            {
                delete_relaxed(role_claim_record.action_address().clone())?;

                let all_my_agents_role_claims_activities =
                    get_all_my_agents_role_claims_activities(&my_profile_hash)?;
                create_all_role_claims_deleted_proof_if_possible(
                    my_pending_unassignment_link.clone(),
                    &my_profile_hash,
                    &all_my_agents_role_claims_activities,
                )?;
            }
        }
    }

    Ok(())
}

pub fn get_pending_unassignment_links_for_profile(
    profile_hash: ActionHash,
) -> ExternResult<Vec<Link>> {
    let links = get_pending_unassignments(())?;

    let links = links
        .into_iter()
        .filter(|link| match link.target.clone().into_action_hash() {
            Some(action_hash) => action_hash.eq(&profile_hash),
            None => false,
        })
        .collect();

    Ok(links)
}

///Agents call this function to unassign their own roles
#[hdk_extern]
pub fn unassign_my_role(pending_unassignment_link: ActionHash) -> ExternResult<()> {
    let Some(record) = get(pending_unassignment_link.clone(), GetOptions::network())? else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "PendingUnassignment link not found"
        ))));
    };

    let Action::CreateLink(create_link) = record.action() else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "Record was not of CreateLink type"
        ))));
    };

    let Ok(Some(LinkTypes::PendingUnassignments)) =
        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Invalid LinkType",
        ))));
    };

    let tag_bytes = SerializedBytes::from(UnsafeBytes::from(create_link.tag.clone().into_inner()));

    let Ok(tag) = PendingUnassignmentLinkTag::try_from(tag_bytes) else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "RoleToAssignee links must contain a PendingUnassignmentLinkTag in their LinkTag",
        ))));
    };

    let role_claim_records = query_undeleted_role_claims_for_role(tag.role.clone())?;

    let role_claim_record = if role_claim_records.len() == 0 {
        Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "RoleClaim not found in our source chain"
        ))))
    } else if role_claim_records.len() > 1 {
        Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: can't have more than one undeleted RoleClaim for the same role"
        ))))
    } else {
        Ok(role_claim_records[0].clone())
    }?;

    // let role_claim = RoleClaim::try_from(role_claim_record.clone())?;
    delete_relaxed(role_claim_record.action_address().clone())?;
    // delete_link_relaxed(role_claim.assign_role_create_link_hash)?;

    // delete_link_relaxed(pending_unassignment_link)?;
    Ok(())
}

///Get pending unassignments to see if I should unassign of if someone should but haven't
#[hdk_extern]
pub fn get_pending_unassignments() -> ExternResult<Vec<Link>> {
    get_links(
        GetLinksInputBuilder::try_new(
            pending_unassignments_path().path_entry_hash()?,
            LinkTypes::PendingUnassignments,
        )?
        .build(),
    )
}
