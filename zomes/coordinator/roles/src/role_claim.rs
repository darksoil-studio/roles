use hdk::prelude::*;
use roles_integrity::*;

use crate::{
    assignees::{get_all_roles_strings, get_assignees_for_role},
    profiles::get_my_profile_hash,
    utils::create_relaxed,
};

#[hdk_extern(infallible)]
pub fn claim_roles_assigned_to_me(_schedule: Option<Schedule>) -> Option<Schedule> {
    if let Err(err) = internal_claim_roles_assigned_to_me() {
        error!("Error calling claim_roles_assigned_to_me: {err:?}");
    }
    Some(Schedule::Persisted("*/30 * * * * * *".into()))
}

/** If I am assigned to the role but haven't claimed it, do so */
fn internal_claim_roles_assigned_to_me() -> ExternResult<()> {
    let Some(my_profile_hash) = get_my_profile_hash()? else {
        return Ok(()); // We don't have a profile yet so we can't have any roles assigned
    };

    let roles = get_all_roles_strings()?;

    for role in roles {
        let assignees_links = get_assignees_for_role(role.clone())?;

        for assignee_link in assignees_links {
            let Some(assignee_profile_action_hash) = assignee_link.target.into_action_hash() else {
                continue;
            };
            if assignee_profile_action_hash.ne(&my_profile_hash) {
                continue;
            }

            let claims = query_undeleted_role_claims_for_role(role.clone())?;
            if claims.len() == 0 {
                create_role_claim(RoleClaim {
                    role: role.clone(),
                    assign_role_create_link_hash: assignee_link.create_link_hash,
                })?;
            }
        }
    }

    Ok(())
}

///Claiming a role on agents source chain
#[hdk_extern]
pub fn create_role_claim(role_claim: RoleClaim) -> ExternResult<()> {
    create_relaxed(EntryTypes::RoleClaim(role_claim.clone()))?;
    Ok(())
}

///Get a role claim
#[hdk_extern]
pub fn get_role_claim(role_claim_hash: ActionHash) -> ExternResult<Option<Record>> {
    let Some(details) = get_details(role_claim_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Record(details) => Ok(Some(details.record)),
        _ => Err(wasm_error!(WasmErrorInner::Guest(
            "Malformed get details response".to_string()
        ))),
    }
}

///Find undeleted role claims for a role
#[hdk_extern]
pub fn query_undeleted_role_claims_for_role(role: String) -> ExternResult<Vec<Record>> {
    let filter = ChainQueryFilter::new()
        .entry_type(UnitEntryTypes::RoleClaim.try_into()?)
        .include_entries(true)
        .action_type(ActionType::Create);
    let records = query(filter)?;
    let filter = ChainQueryFilter::new().action_type(ActionType::Delete);
    let delete_records = query(filter)?;

    let all_deleted_hashes = delete_records
        .into_iter()
        .map(|r| match r.action() {
            Action::Delete(d) => Ok(d.deletes_address.clone()),
            _ => Err(wasm_error!(WasmErrorInner::Guest(String::from(
                "Invalid Delete action"
            )))),
        })
        .collect::<ExternResult<Vec<ActionHash>>>()?;

    let undeleted_records: Vec<Record> = records
        .into_iter()
        .filter(|r| !all_deleted_hashes.contains(r.action_address()))
        .collect();

    let records_for_role = undeleted_records
        .into_iter()
        .filter(|r| {
            let Ok(role_claim) = RoleClaim::try_from(r) else {
                return false;
            };
            role_claim.role.eq(&role)
        })
        .collect();

    Ok(records_for_role)
}

///Find all deletions for role claim
#[hdk_extern]
pub fn get_all_deletes_for_role_claim(
    original_role_claim_hash: ActionHash,
) -> ExternResult<Option<Vec<SignedActionHashed>>> {
    let Some(details) = get_details(original_role_claim_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Entry(_) => Err(wasm_error!(WasmErrorInner::Guest(
            "Malformed details".into()
        ))),
        Details::Record(record_details) => Ok(Some(record_details.deletes)),
    }
}
