use hdi::prelude::*;

use crate::was_admin_at_the_time;

pub fn validate_create_link_role_to_assignee(
    action_hash: &ActionHash,
    action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let assignee =
        target_address
            .into_agent_pub_key()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;

    was_admin_at_the_time(&action.author, action_hash)?;
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_role_to_assignee(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // TODO: add the appropriate validation rules
    Ok(ValidateCallbackResult::Valid)
}
