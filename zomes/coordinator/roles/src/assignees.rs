use hdk::prelude::*;
use roles_integrity::*;

use crate::role_claim::query_undeleted_role_claims_for_role;

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

fn pending_unassignments_path() -> Path {
    Path::from("pending_unassignments")
}

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

#[hdk_extern]
pub fn unassign_my_role(pending_unassignment_link: ActionHash) -> ExternResult<()> {
    let Some(record) = get(pending_unassignment_link.clone(), GetOptions::network())? else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "PendingUnassigment link not found"
        ))));
    };

    let Action::CreateLink(create_link) = record.action() else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "Record was not of CreateLink type"
        ))));
    };

    let Ok(Some(LinkTypes::PendingUnassignments)) =
        LinkTypes::from_type(zome_info()?.id, create_link.link_type)
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "Invalid LinkType"
        ))));
    };

    let Ok(role) = String::from_utf8(create_link.tag.0.clone()) else {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "The pending unassigment link does not carry the role in its tag"
        ))));
    };

    let role_claim_records = query_undeleted_role_claims_for_role(role.clone())?;

    if role_claim_records.len() == 0 {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "RoleClaim not found in our source chain"
        ))));
    } else if role_claim_records.len() > 0 {
        return Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "Unreachable: can't have more than one undeleted RoleClaim for the same role"
        ))));
    }

    for role_claim_record in role_claim_records {
        let role_claim = RoleClaim::try_from(role_claim_record.clone())?;
        delete_entry(role_claim_record.action_address().clone())?;
        delete_link(role_claim.assign_role_create_link_hash)?;
    }

    delete_link(pending_unassignment_link)?;
    Ok(())
}

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

#[hdk_extern]
pub fn get_assignees_for_role(role: String) -> ExternResult<Vec<Link>> {
    let path = role_path(&role)?;

    let links = get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::RoleToAssignee)?.build(),
    )?;
    Ok(links)
}
