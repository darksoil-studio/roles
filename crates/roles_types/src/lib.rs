use hdi::prelude::holo_hash::AgentPubKeyB64;
use hdi::prelude::*;

///App properties (progenitor info)
#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct Properties {
    pub progenitors: Vec<AgentPubKeyB64>,
}

///RoleClaim structure
#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct RoleClaim {
    pub role: String,
    pub assign_role_create_link_hash: ActionHash,
}

///Validate that agents had acces to the role at the time of the action (an undeleted claim earlier in source chain)
pub fn validate_agent_had_undeleted_role_claim_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    role: &String,
    roles_integrity_zome_name: &ZomeName,
) -> ExternResult<ValidateCallbackResult> {
    let dna_info = dna_info()?;

    let Some(roles_zome_index) = dna_info
        .zome_names
        .into_iter()
        .position(|z| z.eq(&roles_integrity_zome_name))
    else {
        return Ok(ValidateCallbackResult::Invalid(String::from(
            "Unreachable: there is no 'roles' integrity zome in this DNA",
        )));
    };

    validate_agent_had_undeleted_role_claim_at_the_time_with_zome_index(
        agent,
        chain_top,
        role,
        ZomeIndex::new(roles_zome_index as u8),
    )
}
///Validate that agents had acces to the role at the time (with zome index)
pub fn validate_agent_had_undeleted_role_claim_at_the_time_with_zome_index(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
    role: &String,
    roles_zome_index: ZomeIndex,
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
        .filter(|create| {
            let EntryType::App(app_entry_type) = &create.entry_type else {
                return false;
            };
            app_entry_type.zome_index() == roles_zome_index
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

    return Ok(ValidateCallbackResult::Invalid(format!(
        "Agent did not have the RoleClaim for the role {role} at the time of committing the action",
    )));
}
