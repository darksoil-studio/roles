use hdi::prelude::*;

use crate::LinkTypes;

///Generate the all_roles path
pub fn all_roles_path() -> ExternResult<TypedPath> {
    Path::from("all_roles").typed(LinkTypes::RolesPath)
}

///Generate the path to role (from all_roles)
pub fn role_path(role: &String) -> ExternResult<TypedPath> {
    let all_roles = all_roles_path()?;
    let mut components = all_roles.path.0;
    components.push(Component::from(role));
    Path::from(components).typed(LinkTypes::RolesPath)
}

///Generate the base address for a role based on path
#[hdk_extern]
pub fn role_base_address(role: String) -> ExternResult<EntryHash> {
    role_path(&role)?.path_entry_hash()
}
///Validate the creation correct link paths for role links
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

    let all_roles_path_entry_hash = all_roles_path()?.path.path_entry_hash()?;

    if target_entry_hash.eq(&all_roles_path_entry_hash) {
        return Ok(ValidateCallbackResult::Valid);
    }

    if !base_entry_hash.eq(&all_roles_path_entry_hash) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RolesPath link must have the all roles path as its base",
        )));
    }

    let bytes = SerializedBytes::from(UnsafeBytes::from(tag.0));
    let Ok(component) = Component::try_from(bytes) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Could not convert bytes to component",
        )));
    };

    let Ok(role) = String::try_from(&component) else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Could not convert component from path",
        )));
    };

    if !target_entry_hash.eq(&role_path(&role)?.path_entry_hash()?) {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "RolesPath link must point to the role path entry hash",
        )));
    }
    Ok(ValidateCallbackResult::Valid)
}

///Validate the path of delete links
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
