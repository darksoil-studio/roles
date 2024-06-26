use hdk::prelude::*;
use roles_integrity::*;

#[hdk_extern]
pub fn create_role_claim(role_claim: RoleClaim) -> ExternResult<Record> {
    let role_claim_hash = create_entry(&EntryTypes::RoleClaim(role_claim.clone()))?;
    let record = get(role_claim_hash.clone(), GetOptions::default())?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest("Could not find the newly created RoleClaim"
                .to_string())
            ),
        )?;
    let path = Path::from("all_roles");
    create_link(
        path.path_entry_hash()?,
        role_claim_hash.clone(),
        LinkTypes::AllRoles,
        (),
    )?;
    Ok(record)
}

#[hdk_extern]
pub fn get_role_claim(role_claim_hash: ActionHash) -> ExternResult<Option<Record>> {
    let Some(details) = get_details(role_claim_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Record(details) => Ok(Some(details.record)),
        _ => {
            Err(
                wasm_error!(
                    WasmErrorInner::Guest("Malformed get details response".to_string())
                ),
            )
        }
    }
}

#[hdk_extern]
pub fn delete_role_claim(
    original_role_claim_hash: ActionHash,
) -> ExternResult<ActionHash> {
    let path = Path::from("all_roles");
    let links = get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::AllRoles)?
            .build(),
    )?;
    for link in links {
        if let Some(hash) = link.target.into_action_hash() {
            if hash == original_role_claim_hash {
                delete_link(link.create_link_hash)?;
            }
        }
    }
    delete_entry(original_role_claim_hash)
}

#[hdk_extern]
pub fn get_all_deletes_for_role_claim(
    original_role_claim_hash: ActionHash,
) -> ExternResult<Option<Vec<SignedActionHashed>>> {
    let Some(details) = get_details(original_role_claim_hash, GetOptions::default())?
    else {
        return Ok(None);
    };
    match details {
        Details::Entry(_) => {
            Err(wasm_error!(WasmErrorInner::Guest("Malformed details".into())))
        }
        Details::Record(record_details) => Ok(Some(record_details.deletes)),
    }
}

#[hdk_extern]
pub fn get_oldest_delete_for_role_claim(
    original_role_claim_hash: ActionHash,
) -> ExternResult<Option<SignedActionHashed>> {
    let Some(mut deletes) = get_all_deletes_for_role_claim(original_role_claim_hash)?
    else {
        return Ok(None);
    };
    deletes
        .sort_by(|delete_a, delete_b| {
            delete_a.action().timestamp().cmp(&delete_b.action().timestamp())
        });
    Ok(deletes.first().cloned())
}
