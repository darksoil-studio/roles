use hdk::prelude::*;
use roles_integrity::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct AssignRoleInput {
    pub role: String,
    pub assignee: AgentPubKey,
}

pub type RequestUnassignRoleInput = AssignRoleInput;

#[hdk_extern]
pub fn assign_role(input: AssignRoleInput) -> ExternResult<()> {
    let path = role_path(&input.role)?;
    path.ensure()?;

    create_link(
        path.path_entry_hash()?,
        input.assignee,
        LinkTypes::RoleToAssignee,
        (),
    )?;

    Ok(())
}

#[hdk_extern]
pub fn request_unassign_role(input: RequestUnassignRoleInput) -> ExternResult<()> {
    let links = get_assignees_for_role(input.role.clone())?;

    for link in links {
        if let Some(target) = link.target.into_agent_pub_key() {
            if target.eq(&input.assignee) {
                delete_link(link.create_link_hash)?;
            }
        }
    }

    Ok(())
}

#[hdk_extern]
pub fn get_assignees_for_role(role: String) -> ExternResult<Vec<Link>> {
    let path = role_path(&role)?;

    let links = get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::RoleToAssignee)?.build(),
    )?;
    Ok(links)
}
