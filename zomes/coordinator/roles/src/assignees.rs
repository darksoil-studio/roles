use hdk::prelude::*;
use roles_integrity::*;

///Assigning roles to agents
#[hdk_extern]
pub fn assign_role(input: AssignRoleInput) -> ExternResult<()> {
    let path = role_path(&input.role)?;
    path.ensure()?;

    for assignee in input.assignees_profiles_hashes {
        create_link(
            path.path_entry_hash()?,
            assignee.clone(),
            LinkTypes::RoleToAssignee,
            input.role.clone(),
        )?;
    }
    Ok(())
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
    let links = get_all_roles(())?;
    let roles = links
        .into_iter()
        .map(|link| assign_role_link_tag_to_role(link.tag))
        .collect::<ExternResult<Vec<String>>>()?;
    Ok(roles)
}
