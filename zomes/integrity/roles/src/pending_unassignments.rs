use hdi::prelude::*;
use profiles_types::Profile;

use crate::{
    profiles::validate_profile_for_agent, validate_agent_was_admin_at_the_time, LinkTypes,
};

///Validates links created for unassignments pending (agents that should delete their claims to roles)
pub fn validate_create_link_pending_unassignments(
    action_hash: &ActionHash,
    action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let assignee_profile_hash =
        target_address
            .into_action_hash()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;

    let Ok(_role) = String::from_utf8(tag.0) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee links must contain the role in their LinkTag",
        )));
    };

    let profile_record = must_get_valid_record(assignee_profile_hash)?;
    let Some(entry) = profile_record.entry().as_option() else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The target of a PendingUnassignment link must be a profile record with an entry"
        )));
    };
    let _profile = Profile::try_from(entry.clone())?;

    let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;

    let ValidateCallbackResult::Valid = was_admin else {
        return Ok(was_admin);
    };
    Ok(ValidateCallbackResult::Valid)
}

///Validates deletions of the pending unassignment links (link integrity and that assignees must be the ones to unassign and delete)
pub fn validate_delete_link_pending_unassigments(
    action_hash: ActionHash,
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(assignee_profile_hash) = original_action.target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee must point to an AgentPubKey",
        )));
    };

    let result = validate_profile_for_agent(action.author, action_hash, assignee_profile_hash)?;
    let ValidateCallbackResult::Valid = result else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Only assignees can unassign themselves",
        )));
    };

    let Ok(role) = String::from_utf8(tag.0) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee links must contain the role in their LinkTag",
        )));
    };

    let previous_record = must_get_valid_record(action.prev_action)?;
    let Action::DeleteLink(delete_link) = previous_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(String::from("Delete PendingUnassignment link must be committed immediately after deleting RoleToAssignee link")));
    };

    let role_to_assignee_record = must_get_valid_record(delete_link.link_add_address.clone())?;
    let Action::CreateLink(role_to_assignee_create_link) = role_to_assignee_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(String::from("Unreachable: delete_link.add_link_address points to a record that is not a CreateLink action.")));
    };

    let Ok(Some(LinkTypes::RoleToAssignee)) = LinkTypes::from_type(
        role_to_assignee_create_link.zome_index,
        role_to_assignee_create_link.link_type,
    ) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The previous DeleteLink does not delete a RoleToAssignee link.",
        )));
    };
    let Ok(role_in_role_to_assignee_link) =
        String::from_utf8(role_to_assignee_create_link.tag.0.clone())
    else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The RoleToAssignee link pointed to by the previous DeleteLink does not contain a valid role in its tag.",
        )));
    };

    if !role_in_role_to_assignee_link.eq(&role) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The role in the RoleToAssignee link pointed to by the previous DeleteLink is not the same role as the PendingUnassignment link role",
        )));
    }

    Ok(ValidateCallbackResult::Valid)
}
