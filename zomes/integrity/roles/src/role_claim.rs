use hdi::prelude::*;
use profiles_types::{ProfileClaim, PROFILE_CLAIM_ENTRY_TYPE_INDEX};
pub use roles_types::{validate_agent_had_undeleted_role_claim_at_the_time, RoleClaim};

use crate::{
    profiles::{profiles_integrity_zome_index, validate_profile_for_agent},
    role_path, LinkTypes, UnitEntryTypes,
};

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

    let role_claim_creates: Vec<(ActionHash, RoleClaim)> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Create(create) => Some((
                activity.action.hashed.hash.clone(),
                create.clone(),
                activity.cached_entry.clone(),
            )),
            _ => None,
        })
        .filter(|(_hash, create, _cached_entry)| create.entry_type.eq(&role_claim_entry_type))
        .map(|(hash, _create, cached_entry)| {
            let entry = cached_entry.ok_or(wasm_error!(WasmErrorInner::Guest(format!(
                "cached_entry not included in RoleClaim agent activity"
            ))))?;
            let role_claim = RoleClaim::try_from(entry)?;
            Ok((hash, role_claim))
        })
        .collect::<ExternResult<Vec<(ActionHash, RoleClaim)>>>()?;

    for (create_action_hash, previous_role_claim) in role_claim_creates {
        let is_deleted = deleted_hashes.contains(&create_action_hash);

        if is_deleted {
            if previous_role_claim
                .assign_role_create_link_hash
                .eq(&assign_role_create_link_hash)
            {
                return Ok(ValidateCallbackResult::Invalid(String::from(
                    "There already was a RoleClaim for this assign_role_create_link_hash.",
                )));
            }
        } else {
            if previous_role_claim.role.eq(&role_claim.role) {
                return Ok(ValidateCallbackResult::Invalid(String::from(
                    "There already is an undeleted RoleClaim for this role.",
                )));
            }
        }
    }

    // Get the CreateLink for the assign_role_create_link_hash, and verify it's a link from the role to the assignee

    let record = must_get_valid_record(assign_role_create_link_hash.clone())?;

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

    // Validate that if I have a ProfileClaim from another agent,
    // that agent didn't already delete the RoleClaim for this assign_role_create_link_hash

    let profiles_integrity_zome_index = profiles_integrity_zome_index()?;

    let profile_claim_creates: Vec<Create> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Create(create) => Some(create.clone()),
            _ => None,
        })
        .filter(|create| {
            let EntryType::App(app_entry_type) = &create.entry_type else {
                return false;
            };
            app_entry_type.zome_index() == profiles_integrity_zome_index
                && app_entry_type.entry_index().0 == PROFILE_CLAIM_ENTRY_TYPE_INDEX
        })
        .collect();

    if profile_claim_creates.len() == 0 {
        Ok(ValidateCallbackResult::Valid)
    } else if profile_claim_creates.len() == 1 {
        let profile_claim_create = profile_claim_creates[0].clone();

        validate_linked_agent_did_not_already_delete_this_role_claim(
            profile_claim_create.entry_hash,
            assign_role_create_link_hash,
        )
    } else {
        Ok(ValidateCallbackResult::Invalid(format!(
            "UNREACHABLE: Agent has more than one ProfileClaim in its source chain"
        )))
    }
}

fn validate_linked_agent_did_not_already_delete_this_role_claim(
    profile_claim_hash: EntryHash,
    assign_role_create_link_hash: ActionHash,
) -> ExternResult<ValidateCallbackResult> {
    let profile_claim_entry = must_get_entry(profile_claim_hash)?;
    let profile_claim = ProfileClaim::try_from(profile_claim_entry.content)?;

    let create_link_hash = profile_claim.agent_to_profile_create_link_hash;

    let agent_to_profile_link_record = must_get_valid_record(create_link_hash.clone())?;

    let filter = ChainFilter::new(create_link_hash);
    let activity = must_get_agent_activity(
        agent_to_profile_link_record.action().author().clone(),
        filter,
    )?;

    let role_claim_entry_type: EntryType = UnitEntryTypes::RoleClaim.try_into()?;

    let role_claim_creates: Vec<(ActionHash, RoleClaim)> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Create(create) => Some((
                activity.action.hashed.hash.clone(),
                create.clone(),
                activity.cached_entry.clone(),
            )),
            _ => None,
        })
        .filter(|(_hash, create, _cached_entry)| create.entry_type.eq(&role_claim_entry_type))
        .map(|(hash, _create, cached_entry)| {
            let entry = cached_entry.ok_or(wasm_error!(WasmErrorInner::Guest(format!(
                "cached_entry not included in RoleClaim agent activity"
            ))))?;
            let role_claim = RoleClaim::try_from(entry)?;
            Ok((hash, role_claim))
        })
        .collect::<ExternResult<Vec<(ActionHash, RoleClaim)>>>()?;

    for (role_claim_create_action_hash, role_claim) in role_claim_creates {
        if role_claim
            .assign_role_create_link_hash
            .ne(&assign_role_create_link_hash)
        {
            continue;
        }
        let deleted_actions: Vec<ActionHash> = activity
            .iter()
            .filter_map(|activity| match &activity.action.hashed.content {
                Action::Delete(d) => Some(d.deletes_address.clone()),
                _ => None,
            })
            .collect();
        let role_claim_was_deleted = deleted_actions.contains(&role_claim_create_action_hash);

        if role_claim_was_deleted {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "RoleClaim had already been deleted by the profile linked agent when they created the AgentToProfile link"
            )));
        }
    }

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
