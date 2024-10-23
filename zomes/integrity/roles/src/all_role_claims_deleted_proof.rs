use hdi::prelude::*;

/// AllRoleClaimsDeletedProof structure
/// This is only created to allow for the validation of the PendingUnassignment link to pass.
/// When an assignee is requested to have a certain role unassigned a PendingUnassignment link
/// gets created targetting their profile hash. This is to make it visible to everyone that the agents for that profile
/// have not completed the request and still have the RoleClaims in their source chain which enable them to perform
/// actions for that role.
/// To delete the PendingUnassignment link, the assignee has to proof to validators that they have deleted the
/// RoleClaims for the given role for **all their devices**. In practice this means they have to start their
/// conductor and have it automatically perform that `Delete` for them.
/// If the assignee has lost control of any of their devices, they have to declare them as lost here.
/// With this, their are committing to not do any further action with them.
/// In the future, we'd like to be able to use `key_state()` from DPKI to validate that the status of the
/// lost agents keys is Invalid, which means the assignee has revoked those keys in DPKI.
/// Since that's not available, for now all agents in this DHT will automatically block the lost agents.
#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct AllRoleClaimsDeletedProof {
    pub assign_role_create_link_hash: ActionHash,
    // This will point to the `Delete` RoleClaim actions for all the agents
    // associated with the assignee profile for the role
    pub role_claims_deletes_hashes: Vec<ActionHash>,
    pub lost_agents: Vec<AgentPubKey>,
}

///Validate the creation of a role claim for an agent
pub fn validate_create_all_role_claims_deleted_proof(
    action_hash: ActionHash,
    action: EntryCreationAction,
    all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}

///Validate the update role claim
pub fn validate_update_all_role_claims_deleted_proof(
    _action: Update,
    _all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
    _original_action: EntryCreationAction,
    _original_all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "Role Claims cannot be updated".to_string(),
    ))
}

///Validate the deletion of a role claim for an Agent
pub fn validate_delete_all_role_claims_deleted_proof(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "AllRoleClaimsDeletedProofs cannot be deleted".to_string(),
    ))
}
