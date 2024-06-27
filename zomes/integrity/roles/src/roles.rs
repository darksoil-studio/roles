use hdi::{hash_path::path::root_hash, prelude::*};

use crate::LinkTypes;

pub fn all_roles_path() -> ExternResult<TypedPath> {
    Path::from("all_roles").typed(LinkTypes::RolesPath)
}

#[hdk_extern]
pub fn role_base_address(role: String) -> ExternResult<EntryHash> {
    role_path(&role)?.path_entry_hash()
}

pub fn role_path(role: &String) -> ExternResult<TypedPath> {
    Path::from(format!("all_roles.{role}")).typed(LinkTypes::RolesPath)
}

pub fn validate_create_link_roles_path(
    _action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let Some(base_entry_hash) = base_address.clone().into_entry_hash() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No entry hash associated with link",
        )));
    };
    let Some(target_entry_hash) = target_address.into_entry_hash() else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "No entry hash associated with link",
        )));
    };

    let all_roles_path_entry_hash = all_roles_path()?.path_entry_hash()?;

    if base_address.eq(&root_hash()?) {
        if target_entry_hash.eq(&all_roles_path_entry_hash) {
            return Ok(ValidateCallbackResult::Valid);
        } else {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "Root path link must point to the all roles entry path",
            )));
        }
    }

    if !base_entry_hash.eq(&all_roles_path_entry_hash) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RolesPath link must have the all roles path as its base",
        )));
    }

    let Ok(role) = String::from_utf8(tag.0) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RolesPath link tag must contain the role",
        )));
    };

    if !target_entry_hash.eq(&role_path(&role)?.path_entry_hash()?) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RolesPath link must point to the role path entry hash",
        )));
    }
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_roles_path(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(String::from(
        "Can't delete roles path links",
    )))
}
