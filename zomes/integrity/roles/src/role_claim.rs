use hdi::prelude::*;
pub use roles_types::{validate_agent_had_undeleted_role_claim_at_the_time, RoleClaim};

use crate::{profiles::validate_profile_for_agent, role_path, LinkTypes, UnitEntryTypes};

///Validate the creation of a role claim for an agent
pub fn validate_create_role_claim(
    action_hash: ActionHash,
    action: EntryCreationAction,
    role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    // Only one undeleted RoleClaim for a certain role at any given point in time

    let assign_role_create_link_hash = role_claim.assign_role_create_link_hash;

    let filter = ChainFilter::new(action.prev_action().clone()).include_cached_entries();
    let activity = must_get_agent_activity(action.author().clone(), filter)?;

    let deleted_hashes: Vec<ActionHash> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Delete(d) => Some(d.deletes_address.clone()),
            _ => None,
        })
        .collect();

    let role_claim_entry_type: EntryType = UnitEntryTypes::RoleClaim.try_into()?;

    let role_claim_creates: Vec<(ActionHash, Create)> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Create(create) => Some((activity.action.hashed.hash.clone(), create.clone())),
            _ => None,
        })
        .filter(|(_hash, create)| create.entry_type.eq(&role_claim_entry_type))
        .collect();

    for (create_action_hash, create) in role_claim_creates {
        let entry = must_get_entry(create.entry_hash)?;

        let Ok(role_claim) = RoleClaim::try_from(entry.content) else {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "Create action did not contain RoleClaim entry type",
            )));
        };

        let is_deleted = deleted_hashes.contains(&create_action_hash);

        if is_deleted {
            if role_claim
                .assign_role_create_link_hash
                .eq(&assign_role_create_link_hash)
            {
                return Ok(ValidateCallbackResult::Invalid(String::from(
                    "There already was a RoleClaim for this assign_role_create_link_hash.",
                )));
            }
        } else {
            if role_claim.role.eq(&role_claim.role) {
                return Ok(ValidateCallbackResult::Invalid(String::from(
                    "There already is an undeleted RoleClaim for this role.",
                )));
            }
        }
    }

    // Get the CreateLink for the assign_role_create_link_hash, and verify it's a link from the role to the assignee

    let record = must_get_valid_record(assign_role_create_link_hash)?;

    let link_action = record.action().clone();

    let Action::CreateLink(create_link) = link_action.clone() else {
        return Ok(ValidateCallbackResult::Invalid(format!("The assign_role_create_link_hash references a record that does not contain a CreateLink action")));
    };

    let base_address = create_link.base_address;

    let Some(actual_base_entry_hash) = base_address.into_entry_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No entry hash associated with the base of the link".to_string(),
        ));
    };
    let path = role_path(&role_claim.role)?;
    let expected_role_path_entry_hash = path.path_entry_hash()?;

    if expected_role_path_entry_hash.ne(&actual_base_entry_hash) {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The base for the assign_role link does not match the expected role path entry hash"
        )));
    }

    let Some(link_type) = LinkTypes::from_type(create_link.zome_index, create_link.link_type)?
    else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Invalid LinkType: not a roles link type"
        )));
    };

    let LinkTypes::RoleToAssignee = link_type else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "Assign role link is not of type RoleToAssignee"
        )));
    };

    let Ok(role) = String::from_utf8(create_link.tag.0) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee links must contain the role in their LinkTag",
        )));
    };
    if role.ne(&role_claim.role) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "The tag of the RoleToAssignee link must be the same role as the role declared RoleClaim",
        )));
    }

    let Some(assignee_profile_hash) = create_link.target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(
            "No action hash associated with link".to_string(),
        ));
    };

    let result = validate_profile_for_agent(
        action.author().clone(),
        action_hash.clone(),
        assignee_profile_hash,
    )?;

    let ValidateCallbackResult::Valid = result else {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The author of the RoleClaim does not have the assignee profile_hash for the AssignRole link"
        )));
    };

    Ok(ValidateCallbackResult::Valid)
}

///Validate the update role claim
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

///Validate the deletion of a role claim for an Agent
pub fn validate_delete_role_claim(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}
