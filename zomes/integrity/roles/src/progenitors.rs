use hdi::prelude::*;
use holo_hash::AgentPubKeyB64;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
pub struct Properties {
    progenitors: Vec<AgentPubKeyB64>,
}

#[hdk_extern]
pub fn progenitors() -> ExternResult<Vec<AgentPubKey>> {
    let properties = dna_info()?.modifiers.properties;
    let progenitor_properties: Properties =
        Properties::try_from(properties).map_err(|err| wasm_error!(err))?;

    Ok(progenitor_properties
        .progenitors
        .into_iter()
        .map(|h| h.into())
        .collect())
}
