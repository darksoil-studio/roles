use hdi::prelude::*;

use crate::{progenitors, role_path, validate_agent_was_admin_at_the_time, LinkTypes, RoleClaim};

pub fn validate_create_link_role_to_assignee(
    action_hash: &ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let Some(assignee) = target_address.into_agent_pub_key() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No action hash associated with link".to_string(),
        ));
    };

    let Ok(role) = String::from_utf8(tag.0) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee links must contain the role in their LinkTag",
        )));
    };
    let Some(base_entry_hash) = base_address.into_entry_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No entry hash associated with the base of the link".to_string(),
        ));
    };

    if !role_path(&role)?.path_entry_hash()?.eq(&base_entry_hash) {
        return Ok(ValidateCallbackResult::Invalid(
            "Invalid path entry hash at the base".to_string(),
        ));
    };

    let progenitors = progenitors(())?;

    // If this is the progenitor assigning the admin role to itself at init time, that's okey
    if progenitors.contains(&assignee) {
        let activity = must_get_agent_activity(assignee, ChainFilter::new(action_hash.clone()))?;

        if let None = activity
            .into_iter()
            .find(|activity| match activity.action.action() {
                Action::InitZomesComplete(_) => true,
                _ => false,
            })
        {
            return Ok(ValidateCallbackResult::Valid);
        }
    }

    let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;
    let ValidateCallbackResult::Valid = was_admin else {
        return Ok(was_admin);
    };
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_role_to_assignee(
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    if !action.author.eq(&original_action.author) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Only assignees can unassign themselves",
        )));
    }

    let Ok(role) = String::from_utf8(tag.0) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee links must contain the role in their LinkTag",
        )));
    };

    let previous_record = must_get_valid_record(action.prev_action)?;
    let Action::Delete(delete) = previous_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(String::from("Delete role assignment link must be committed immediately after deleting role_claim entries")));
    };

    let deleted_role_claim = must_get_valid_record(delete.deletes_address.clone())?;
    let Ok(role_claim) = RoleClaim::try_from(deleted_role_claim) else {
        return Ok(ValidateCallbackResult::Invalid(String::from("Delete role assignment link must be committed immediately after deleting role_claim entries: the entry deleted was not a RoleClaim entry")));
    };
    if !role_claim.role.eq(&role) {
        return Ok(ValidateCallbackResult::Invalid(String::from("Delete role assignment link must be committed immediately after deleting role_claim entries: the role in the deleted RoleClaim is not the role in the RoleToAssignee link")));
    }

    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_create_link_pending_unassignments(
    action_hash: &ActionHash,
    action: CreateLink,
    _base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let _assignee =
        target_address
            .into_agent_pub_key()
            .ok_or(wasm_error!(WasmErrorInner::Guest(
                "No action hash associated with link".to_string()
            )))?;

    let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;

    let ValidateCallbackResult::Valid = was_admin else {
        return Ok(was_admin);
    };
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_pending_unassigments(
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    if !action.author.eq(&original_action.author) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Only assignees can unassign themselves",
        )));
    }

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

    let Ok(Some(LinkTypes::RoleToAssignee)) =
        LinkTypes::from_type(zome_info()?.id, role_to_assignee_create_link.link_type)
    else {
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
            "The role in the RoleToAssignee link pointed to by the previous DeleteLink is not the same role as the PendingUnassigment link role",
        )));
    }

    Ok(ValidateCallbackResult::Valid)
}
