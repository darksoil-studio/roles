use hdi::prelude::*;
use roles_types::*;

///Returns progenitors 
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
