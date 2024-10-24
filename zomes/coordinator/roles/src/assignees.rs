use hdk::prelude::*;
use roles_integrity::*;

///Assigning roles to agents
#[hdk_extern]
pub fn assign_role(input: AssignRoleInput) -> ExternResult<Vec<ActionHash>> {
    let path = role_path(&input.role)?;
    path.ensure()?;

    let actions_hashes = input
        .assignees_profiles_hashes
        .into_iter()
        .map(|assignee_profile_hash| {
            create_link(
                path.path_entry_hash()?,
                assignee_profile_hash.clone(),
                LinkTypes::RoleToAssignee,
                input.role.clone(),
            )
        })
        .collect::<ExternResult<Vec<ActionHash>>>()?;

    Ok(actions_hashes)
}

///Get all agents that have been assigned a role
#[hdk_extern]
pub fn get_assignees_for_role(role: String) -> ExternResult<Vec<Link>> {
    let path = role_path(&role)?;

    let links = get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::RoleToAssignee)?.build(),
    )?;
    Ok(links)
}

#[hdk_extern]
pub fn get_all_roles() -> ExternResult<Vec<Link>> {
    let all_roles_path = all_roles_path()?;
    all_roles_path.children()
}

pub fn assign_role_link_tag_to_role(tag: LinkTag) -> ExternResult<String> {
    let role = String::from_utf8(tag.0.clone())
        .map_err(|err| wasm_error!(WasmErrorInner::Guest(format!("Invalid role tag: {err:?}"))))?;
    Ok(role)
}

pub fn get_all_roles_strings() -> ExternResult<Vec<String>> {
    let all_roles_path = all_roles_path()?;
    let children_paths = all_roles_path.children_paths()?;

    let roles = children_paths
        .into_iter()
        .map(|path| {
            let components: Vec<Component> = path.path.into();
            let Some(component) = components.last() else {
                return Err(wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid path: no components"
                ))));
            };

            let component_str = String::try_from(component).map_err(|_err| {
                wasm_error!(WasmErrorInner::Guest(format!(
                    "Invalid path: last component is not a string"
                )))
            })?;
            Ok(component_str)
        })
        .collect::<ExternResult<Vec<String>>>()?;

    Ok(roles)
}
