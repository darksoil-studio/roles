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

pub fn profiles_integrity_zome_index() -> ExternResult<ZomeIndex> {
    let profiles_integrity_zome_name = profiles_integrity_zome_name();

    let all_zome_names = dna_info()?.zome_names;

    let maybe_profiles_index = all_zome_names
        .iter()
        .position(|zome_name| zome_name.eq(&profiles_integrity_zome_name));

    let Some(profiles_index) = maybe_profiles_index else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "No zome with name {profiles_integrity_zome_name} exists in this DNA"
        ))));
    };

    Ok(ZomeIndex::new(profiles_index as u8))
}
