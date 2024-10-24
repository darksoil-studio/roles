use hdi::prelude::*;

use crate::{
    profiles::validate_profile_for_agent, progenitors, role_path,
    validate_agent_was_admin_at_the_time, AllRoleClaimsDeletedProof, LinkTypes, UnitEntryTypes,
    ADMIN_ROLE,
};

/// Validation of the link that assignees use to claim roles, checks entrytypes, paths and that issuer was admin
pub fn validate_create_link_role_to_assignee(
    action_hash: &ActionHash,
    action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    // Check the entry type for the given action hash
    let Some(assignee_profile_hash) = target_address.into_action_hash() else {
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
    let author_is_progenitor = progenitors.contains(&action.author);

    // If this is the progenitor assigning the admin role to itself for the first time, that's okey
    if role.as_str() == ADMIN_ROLE && author_is_progenitor {
        let result = validate_profile_for_agent(
            action.author.clone(),
            action_hash.clone(),
            assignee_profile_hash.clone(),
        )?;

        let assignee_is_progenitor = match result {
            ValidateCallbackResult::Valid => true,
            _ => false,
        };

        if assignee_is_progenitor {
            let activity = must_get_agent_activity(
                action.author.clone(),
                ChainFilter::new(action_hash.clone()),
            )?;

            let previous_admin_role_assigment_for_this_progenitor = activity
                .iter()
                .filter(|activity| activity.action.action_address().ne(&action_hash))
                .find(|activity| match activity.action.action() {
                    Action::CreateLink(create_link) => {
                        let Ok(Some(LinkTypes::RoleToAssignee)) =
                            LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                        else {
                            return false;
                        };

                        let Some(profile_hash) =
                            create_link.target_address.clone().into_action_hash()
                        else {
                            return false;
                        };
                        error!(
                            "YAVERAS {:?} {:?} {:?}",
                            create_link,
                            assignee_profile_hash,
                            profile_hash.eq(&assignee_profile_hash)
                        );
                        let Ok(role) = String::from_utf8(create_link.tag.0.clone()) else {
                            return false;
                        };

                        role.as_str() == ADMIN_ROLE && profile_hash.eq(&assignee_profile_hash)
                    }
                    _ => false,
                });

            if previous_admin_role_assigment_for_this_progenitor.is_none() {
                return Ok(ValidateCallbackResult::Valid);
            } else {
                error!(
                    "Previous {:?} {:?}",
                    previous_admin_role_assigment_for_this_progenitor, action_hash
                );
                return Ok(ValidateCallbackResult::Invalid(String::from(
                    "Progenitors can only assign the admin role to itself once.",
                )));
            }
        }
    }

    let was_admin = validate_agent_was_admin_at_the_time(&action.author, action_hash)?;

    let ValidateCallbackResult::Valid = was_admin else {
        return Ok(was_admin);
    };
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_role_to_assignee(
    action_hash: ActionHash,
    action: DeleteLink,
    original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(assignee_profile_hash) = original_action.target_address.into_action_hash() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RoleToAssignee must point to an ActionHash",
        )));
    };

    let result =
        validate_profile_for_agent(action.author, action_hash.clone(), assignee_profile_hash)?;
    let ValidateCallbackResult::Valid = result else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Only assignees can unassign themselves",
        )));
    };

    let previous_record = must_get_valid_record(action.prev_action)?;
    let Action::Create(create) = previous_record.action() else {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an AllRoleClaimsDeletedProof entry.")
        ));
    };

    let all_role_claims_deleted_proof_entry_type: EntryType =
        UnitEntryTypes::AllRoleClaimsDeletedProof.try_into()?;

    if create
        .entry_type
        .ne(&all_role_claims_deleted_proof_entry_type)
    {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an entry of type AllRoleClaimsDeletedProof.")
        ));
    }

    let Some(entry) = previous_record.entry().as_option() else {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an AllRoleClaimsDeletedProof entry that is not None.")
        ));
    };

    let all_role_claims_deleted_proof = AllRoleClaimsDeletedProof::try_from(entry.clone())?;

    if all_role_claims_deleted_proof
        .assign_role_create_link_hash
        .ne(&action.link_add_address)
    {
        return Ok(ValidateCallbackResult::Invalid(
            String::from("Delete role assignment link must be committed immediately after creating an AllRoleClaimsDeletedProof entry that references it.")
        ));
    }

    Ok(ValidateCallbackResult::Valid)
}
