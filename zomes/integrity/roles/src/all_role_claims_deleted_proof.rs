use std::collections::BTreeMap;

use hdi::prelude::*;
use profiles_types::{ProfileClaim, AGENT_TO_PROFILE_LINK_INDEX, PROFILE_CLAIM_ENTRY_TYPE_INDEX};
use roles_types::RoleClaim;

use crate::{
    profiles::{profiles_integrity_zome_index, validate_profile_for_agent},
    UnitEntryTypes,
};

/// AllRoleClaimsDeletedProof struct
///
/// This is only created to allow for the validation of the PendingUnassignment link to pass.
/// When an assignee is requested to have a certain role unassigned a PendingUnassignment link
/// gets created targetting their profile hash. This is to make it visible to everyone that the agents for that profile
/// have not completed the request and still have the RoleClaims in their source chain which enable them to perform
/// actions for that role.
///
/// To delete the AssingRole and PendingUnassignment link, the assignee has to proof to validators that they have deleted the
/// RoleClaims for the given role for **all their devices**. In practice this means they have to start their
/// conductor and have it automatically perform that `Delete` for them.
///
/// If the assignee has lost control of any of their devices, they have to declare them as lost here.
/// With this, their are committing to not do any further action with them.
///
/// In the future, we'd like to be able to use `key_state()` from DPKI to validate that the status of the
/// lost agents keys is Invalid, which means the assignee has revoked those keys in DPKI.
/// Since that's not available, for now all agents in this DHT will automatically block the lost agents.
#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct AllRoleClaimsDeletedProof {
    pub assign_role_create_link_hash: ActionHash,
    pub profile_hash: ActionHash,
    // This will point to the `Delete` RoleClaim actions for all the agents
    // associated with the assignee profile for the role
    pub role_claims_deletes_hashes: BTreeMap<AgentPubKey, ActionHash>,
    pub lost_agents: Vec<AgentPubKey>,
}

///Validate the creation of an AllRoleClaimsDeletedProof
pub fn validate_create_all_role_claims_deleted_proof(
    _action_hash: ActionHash,
    action: EntryCreationAction,
    all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    if !all_role_claims_deleted_proof
        .role_claims_deletes_hashes
        .contains_key(action.author())
    {
        return Ok(ValidateCallbackResult::Invalid(format!(
            "The author's RoleClaim delete hash was not inclued in `role_claims_deletes_hashes`"
        )));
    }

    let mut all_agents_referenced_in_the_chains: BTreeSet<AgentPubKey> = BTreeSet::new();

    let profiles_integrity_zome_index = profiles_integrity_zome_index()?;
    let role_claim_entry_type: EntryType = UnitEntryTypes::RoleClaim.try_into()?;

    for (agent, delete_role_claim_hash) in all_role_claims_deleted_proof
        .role_claims_deletes_hashes
        .clone()
    {
        let result = validate_profile_for_agent(
            agent.clone(),
            delete_role_claim_hash.clone(),
            all_role_claims_deleted_proof.profile_hash.clone(),
        )?;
        let ValidateCallbackResult::Valid = result else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The agent {agent:?} does not belong to the profile_hash {:?}",
                all_role_claims_deleted_proof.profile_hash
            )));
        };

        let delete_role_claim_record = must_get_valid_record(delete_role_claim_hash.clone())?;
        let Action::Delete(delete) = delete_role_claim_record.action().clone() else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} does not point to a Delete action"               
            )));
        };
        let role_claim_record = must_get_valid_record(delete.deletes_address)?;
        let Action::Create(create) = role_claim_record.action().clone() else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a Delete action that is not for a Create action"
            )));
        };
        if create.entry_type.ne(&role_claim_entry_type) {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a Delete action that is not for a Create RoleClaim"
            )));
        }
        let Some(entry) = role_claim_record.entry().as_option() else {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a Delete action that is not for a Create action with a visible entry"
            )));
        };
        let role_claim = RoleClaim::try_from(entry.clone())?;
        if role_claim
            .assign_role_create_link_hash
            .ne(&all_role_claims_deleted_proof.assign_role_create_link_hash)
        {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The role_claim_deletes_hashes for agent {agent:?} points to a Delete action that is for a RoleClaim with different assign_role_create_link_hash other than the one in the AllRoleClaimsDeletedProof."
            )));
        }

        let filter = ChainFilter::new(delete_role_claim_hash);
        let activity_vec = must_get_agent_activity(agent.clone(), filter)?;

        for activity in activity_vec {
            let action = activity.action.hashed.content;

            // Check if this action is either a ProfileClaim of an AgentToProfile link
            // if so, add the references to all agents referenced in chains
            match action {
                Action::CreateLink(create_link) => {
                    if create_link.zome_index == profiles_integrity_zome_index
                        && create_link.link_type.0 == AGENT_TO_PROFILE_LINK_INDEX
                    {
                        let base_agent_pub_key = create_link
                            .base_address
                            .into_agent_pub_key()
                            .ok_or(wasm_error!(WasmErrorInner::Guest(format!(
                                "Base of AgentToProfile link is not an agent"
                            ))))?;
                        all_agents_referenced_in_the_chains.insert(base_agent_pub_key);
                    }
                }
                Action::Create(create) => {
                    if let EntryType::App(app_entry_type) = create.entry_type {
                        if app_entry_type.zome_index() == profiles_integrity_zome_index
                            && app_entry_type.entry_index().0 == PROFILE_CLAIM_ENTRY_TYPE_INDEX
                        {
                            let entry = must_get_entry(create.entry_hash)?;
                            let profile_claim = ProfileClaim::try_from(entry)?;
                            let agent_to_link_create_link_hash =
                                profile_claim.agent_to_profile_create_link_hash;

                            let agent_to_link_record =
                                must_get_valid_record(agent_to_link_create_link_hash)?;
                            all_agents_referenced_in_the_chains
                                .insert(agent_to_link_record.action().author().clone());
                        }
                    }
                }
                _ => {}
            }
        }
    }

    for agent_referenced in all_agents_referenced_in_the_chains {
        let has_delete_role_claim = all_role_claims_deleted_proof
            .role_claims_deletes_hashes
            .contains_key(&agent_referenced);
        let is_declared_lost = all_role_claims_deleted_proof
            .lost_agents
            .iter()
            .find(|a| a.eq(&&agent_referenced))
            .is_some();
        if !has_delete_role_claim && !is_declared_lost {
            return Ok(ValidateCallbackResult::Invalid(format!(
                "The delete RoleClaim action hash for agent {agent_referenced:?} is missing."
            )));
        }
    }

    Ok(ValidateCallbackResult::Valid)
}

///Validate the update of an AllRoleClaimsDeletedProof
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

///Validate the deletion of an AllRoleClaimsDeletedProof
pub fn validate_delete_all_role_claims_deleted_proof(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_all_role_claims_deleted_proof: AllRoleClaimsDeletedProof,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "AllRoleClaimsDeletedProofs cannot be deleted".to_string(),
    ))
}
