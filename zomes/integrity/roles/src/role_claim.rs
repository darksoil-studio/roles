use hdi::prelude::*;

#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct RoleClaim {
    pub role_name: String,
    pub assign_role_create_link_hash: ActionHash,
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
    Ok(ValidateCallbackResult::Invalid("Role Claims cannot be updated".to_string()))
}

pub fn validate_delete_role_claim(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_create_link_all_roles(
    _action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let action_hash = target_address
        .into_action_hash()
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest("No action hash associated with link".to_string())
            ),
        )?;
    let record = must_get_valid_record(action_hash)?;
    let _role_claim: crate::RoleClaim = record
        .entry()
        .to_app_option()
        .map_err(|e| wasm_error!(e))?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest("Linked action must reference an entry"
                .to_string())
            ),
        )?;
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_all_roles(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}
