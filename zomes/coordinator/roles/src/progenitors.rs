use hdk::prelude::*;
use roles_integrity::{progenitors, ADMIN_ROLE};

use crate::{assignees::assign_role_to_single_assignee, profiles::get_my_profile_hash};

/// This function will only be called if this agent is a progenitor AND it does not have a role claim for the admin role yet
#[hdk_extern(infallible)]
pub fn claim_admin_role_as_progenitor(_schedule: Option<Schedule>) -> Option<Schedule> {
    let result = internal_claim_admin_role_as_progenitor();
    match result {
        Ok(()) => None,
        _ => Some(Schedule::Persisted("*/5 * * * * * *".into())), // Every 5 seconds
    }
}

pub fn internal_claim_admin_role_as_progenitor() -> ExternResult<()> {
    let maybe_my_profile_hash = get_my_profile_hash()?;
    let Some(my_profile_hash) = maybe_my_profile_hash else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Progenitor has not created their profile yet"
        ))));
    };

    assign_role_to_single_assignee(ADMIN_ROLE.to_string(), my_profile_hash)
}

pub fn claim_admin_role(my_profile_hash: ActionHash) -> ExternResult<()> {
    // If I'm a progenitor, automatically claim the admin role
    // create_role_claim(RoleClaim {
    //     role: ADMIN_ROLE.to_string(),
    //     assign_role_create_link_hash: create_link_action_hash,
    // })?;

    Ok(())
}
