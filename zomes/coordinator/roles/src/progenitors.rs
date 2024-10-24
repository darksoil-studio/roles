use hdk::prelude::*;
use roles_integrity::{role_path, LinkTypes, ADMIN_ROLE};

use crate::{
    profiles::get_my_profile_hash,
    utils::{create_link_relaxed, ensure_relaxed},
};

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

    let path = role_path(&ADMIN_ROLE.to_string())?;
    ensure_relaxed(&path)?;
    create_link_relaxed(
        path.path_entry_hash()?,
        my_profile_hash,
        LinkTypes::RoleToAssignee,
        ADMIN_ROLE.to_string(),
    )?;

    Ok(())
}
