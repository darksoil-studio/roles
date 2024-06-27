use hdi::prelude::*;

#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct RoleClaim {
    pub role: String,
    pub assign_role_create_link_hash: ActionHash,
}

pub fn validate_agent_had_undeleted_role_claim_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    role: &String,
) -> ExternResult<ValidateCallbackResult> {
    let filter = ChainFilter::new(chain_top.clone()).include_cached_entries();
    let activity = must_get_agent_activity(agent.clone(), filter)?;

    let deleted_hashes: Vec<ActionHash> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Delete(d) => Some(d.deletes_address.clone()),
            _ => None,
        })
        .collect();

    let undeleted_role_claim_creates: Vec<Create> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Create(create) => match deleted_hashes.contains(&activity.action.hashed.hash) {
                true => None,
                false => Some(create.clone()),
            },
            _ => None,
        })
        // TODO: filter here for RoleClaim entry type if more entry types are added to this zome
        .collect();

    for undeleted_create in undeleted_role_claim_creates {
        let entry = must_get_entry(undeleted_create.entry_hash)?;

        let Ok(undeleted_role_claim) = RoleClaim::try_from(entry.content) else {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "Create action did not contain RoleClaim entry type",
            )));
        };

        if undeleted_role_claim.role.eq(role) {
            return Ok(ValidateCallbackResult::Valid);
        }
    }

    return Ok(ValidateCallbackResult::Invalid(String::from(
        "Agent did not have the RoleClaim at the time of committing the action",
    )));
}

pub fn validate_create_role_claim(
    action: EntryCreationAction,
    role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    // Only one undeleted RoleClaim for a certain role at any given point in time

    let filter = ChainFilter::new(action.prev_action().clone()).include_cached_entries();
    let activity = must_get_agent_activity(action.author().clone(), filter)?;

    let deleted_hashes: Vec<ActionHash> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Delete(d) => Some(d.deletes_address.clone()),
            _ => None,
        })
        .collect();

    let undeleted_role_claim_creates: Vec<Create> = activity
        .iter()
        .filter_map(|activity| match &activity.action.hashed.content {
            Action::Create(create) => match deleted_hashes.contains(&activity.action.hashed.hash) {
                true => None,
                false => Some(create.clone()),
            },
            _ => None,
        })
        // TODO: filter here for RoleClaim entry type if more entry types are added to this zome
        .collect();

    for undeleted_create in undeleted_role_claim_creates {
        let entry = must_get_entry(undeleted_create.entry_hash)?;

        let Ok(undeleted_role_claim) = RoleClaim::try_from(entry.content) else {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "Create action did not contain RoleClaim entry type",
            )));
        };

        if undeleted_role_claim.role.eq(&role_claim.role) {
            return Ok(ValidateCallbackResult::Invalid(String::from(
                "There already is an undeleted RoleClaim for this role.",
            )));
        }
    }
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_update_role_claim(
    _action: Update,
    _role_claim: RoleClaim,
    _original_action: EntryCreationAction,
    _original_role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "Role Claims cannot be updated".to_string(),
    ))
}

pub fn validate_delete_role_claim(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_role_claim: RoleClaim,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}
