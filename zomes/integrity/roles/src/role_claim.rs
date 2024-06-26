use hdi::prelude::*;

#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct RoleClaim {
    pub role: String,
    pub assign_role_create_link_hash: ActionHash,
}

pub fn had_role_claim_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    role: &String,
) -> ExternResult<bool> {
    Ok(false)
}

pub fn validate_create_role_claim(
    _action: EntryCreationAction,
    _role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_update_role_claim(
    _action: Update,
    _role_claim: RoleClaim,
    _original_action: EntryCreationAction,
    _original_role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "Role Claims cannot be updated".to_string(),
    ))
}

pub fn validate_delete_role_claim(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}
