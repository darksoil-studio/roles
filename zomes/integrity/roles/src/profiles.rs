use hdi::prelude::*;

pub fn profiles_integrity_zome_name() -> ZomeName {
    match std::option_env!("PROFILES_INTEGRITY_ZOME_NAME") {
        Some(zome_name) => zome_name.into(),
        None => ZomeName::from("profiles_integrity"),
    }
}

pub fn validate_profile_for_agent(
    agent: AgentPubKey,
    chain_top: ActionHash,
    profile_hash: ActionHash,
) -> ExternResult<ValidateCallbackResult> {
    profiles_types::validate_profile_for_agent(
        agent,
        chain_top,
        profile_hash,
        &profiles_integrity_zome_name(),
    )
}
