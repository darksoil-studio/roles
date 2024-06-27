use hdk::prelude::*;
use roles_integrity::*;

#[hdk_extern]
pub fn create_role_claim(role_claim: RoleClaim) -> ExternResult<Record> {
    let role_claim_hash = create_entry(&EntryTypes::RoleClaim(role_claim.clone()))?;
    let record = get(role_claim_hash.clone(), GetOptions::default())?.ok_or(wasm_error!(
        WasmErrorInner::Guest("Could not find the newly created RoleClaim".to_string())
    ))?;
    Ok(record)
}

#[hdk_extern]
pub fn get_role_claim(role_claim_hash: ActionHash) -> ExternResult<Option<Record>> {
    let Some(details) = get_details(role_claim_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Record(details) => Ok(Some(details.record)),
        _ => Err(wasm_error!(WasmErrorInner::Guest(
            "Malformed get details response".to_string()
        ))),
    }
}

#[hdk_extern]
pub fn query_undeleted_role_claims_for_role(role: String) -> ExternResult<Vec<Record>> {
    let filter = ChainQueryFilter::new()
        .entry_type(UnitEntryTypes::RoleClaim.try_into()?)
        .include_entries(true)
        .action_type(ActionType::Create);
    let records = query(filter)?;
    let filter = ChainQueryFilter::new().action_type(ActionType::Delete);
    let delete_records = query(filter)?;

    let all_deleted_hashes = delete_records
        .into_iter()
        .map(|r| match r.action() {
            Action::Delete(d) => Ok(d.deletes_address.clone()),
            _ => Err(wasm_error!(WasmErrorInner::Guest(String::from(
                "Invalid Delete action"
            )))),
        })
        .collect::<ExternResult<Vec<ActionHash>>>()?;

    let undeleted_records: Vec<Record> = records
        .into_iter()
        .filter(|r| !all_deleted_hashes.contains(r.action_address()))
        .collect();

    let records_for_role = undeleted_records
        .into_iter()
        .filter(|r| {
            let Ok(role_claim) = RoleClaim::try_from(r) else {
                return false;
            };
            role_claim.role.eq(&role)
        })
        .collect();

    Ok(records_for_role)
}

pub fn delete_role_claim(original_role_claim_hash: ActionHash) -> ExternResult<ActionHash> {
    delete_entry(original_role_claim_hash)
}

#[hdk_extern]
pub fn get_all_deletes_for_role_claim(
    original_role_claim_hash: ActionHash,
) -> ExternResult<Option<Vec<SignedActionHashed>>> {
    let Some(details) = get_details(original_role_claim_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Entry(_) => Err(wasm_error!(WasmErrorInner::Guest(
            "Malformed details".into()
        ))),
        Details::Record(record_details) => Ok(Some(record_details.deletes)),
    }
}
