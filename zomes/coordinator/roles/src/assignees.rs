use hdk::prelude::*;
use roles_integrity::*;

use crate::{
    role_claim::{create_role_claim, query_undeleted_role_claims_for_role},
    utils::{delete_link_relaxed, delete_relaxed},
};

///Input structure for assigning roles
#[derive(Serialize, Deserialize, Debug)]
pub struct AssignRoleInput {
    pub role: String,
    pub assignees: Vec<AgentPubKey>,
}

///Inpur structure for unassigning roles
#[derive(Serialize, Deserialize, Debug)]
pub struct RequestUnassignRoleInput {
    pub role: String,
    pub assignee: AgentPubKey,
}


/// Assign role function used in init function
pub fn assign_role_to_single_agent(
    role: String,
    assignee: AgentPubKey,
) -> ExternResult<ActionHash> {
    let path = role_path(&role)?;
    path.ensure()?;
    create_link(
        path.path_entry_hash()?,
        assignee,
        LinkTypes::RoleToAssignee,
        role,
    )
}

///Assigning roles to agents 
#[hdk_extern]
pub fn assign_role(input: AssignRoleInput) -> ExternResult<()> {
    let path = role_path(&input.role)?;
    path.ensure()?;

    for assignee in input.assignees {
        let assign_role_create_link_hash = create_link(
            path.path_entry_hash()?,
            assignee.clone(),
            LinkTypes::RoleToAssignee,
            input.role.clone(),
        )?;
        let agent_info = agent_info()?;
        if assignee.eq(&agent_info.agent_latest_pubkey) {
            create_role_claim(RoleClaim {
                role: input.role.clone(),
                assign_role_create_link_hash,
            })?;
        }
    }
    Ok(())
}

///Generating path to pending_unassignments
fn pending_unassignments_path() -> Path {
    Path::from("pending_unassignments")
}

///Creating requests for people to unassign roles
#[hdk_extern]
pub fn request_unassign_role(input: RequestUnassignRoleInput) -> ExternResult<()> {
    create_link(
        pending_unassignments_path().path_entry_hash()?,
        input.assignee.clone(),
        LinkTypes::PendingUnassignments,
        input.role,
    )?;

    Ok(())
}

///Agents call this function to unassign their own roles
#[hdk_extern]
pub fn unassign_my_role(pending_unassignment_link: ActionHash) -> ExternResult<()> {
    let Some(record) = get(pending_unassignment_link.clone(), GetOptions::network())? else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "PendingUnassignment link not found"
        ))));
    };

    let Action::CreateLink(create_link) = record.action() else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "Record was not of CreateLink type"
        ))));
    };

    let Ok(Some(LinkTypes::PendingUnassignments)) =
        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Invalid LinkType",
        ))));
    };

    let Ok(role) = String::from_utf8(create_link.tag.0.clone()) else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "The pending unassigment link does not carry the role in its tag"
        ))));
    };

    let role_claim_records = query_undeleted_role_claims_for_role(role.clone())?;

    let role_claim_record = if role_claim_records.len() == 0 {
        Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "RoleClaim not found in our source chain"
        ))))
    } else if role_claim_records.len() > 1 {
        Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: can't have more than one undeleted RoleClaim for the same role"
        ))))
    } else {
        Ok(role_claim_records[0].clone())
    }?;

    let role_claim = RoleClaim::try_from(role_claim_record.clone())?;
    delete_relaxed(role_claim_record.action_address().clone())?;
    delete_link_relaxed(role_claim.assign_role_create_link_hash)?;

    delete_link_relaxed(pending_unassignment_link)?;
    Ok(())
}

///Get pending unassignments to see if I should unassign of if someone should but haven't
#[hdk_extern]
pub fn get_pending_unassignments() -> ExternResult<Vec<Link>> {
    get_links(
        GetLinksInputBuilder::try_new(
            pending_unassignments_path().path_entry_hash()?,
            LinkTypes::PendingUnassignments,
        )?
        .build(),
    )
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
