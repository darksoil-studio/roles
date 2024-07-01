use hdi::prelude::*;
use roles_types::*;

#[hdk_entry_helper]
pub struct ExampleEntry(String);

#[derive(Serialize, Deserialize)]
#[serde(tag = "type")]
#[hdk_entry_types]
#[unit_enum(UnitEntryTypes)]
pub enum EntryTypes {
    Example(ExampleEntry),
}

pub fn action_hash(op: &Op) -> &ActionHash {
    match op {
        Op::StoreRecord(StoreRecord { record }) => record.action_address(),
        Op::StoreEntry(StoreEntry { action, .. }) => &action.hashed.hash,
        Op::RegisterUpdate(RegisterUpdate { update, .. }) => &update.hashed.hash,
        Op::RegisterDelete(RegisterDelete { delete, .. }) => &delete.hashed.hash,
        Op::RegisterAgentActivity(RegisterAgentActivity { action, .. }) => &action.hashed.hash,
        Op::RegisterCreateLink(RegisterCreateLink { create_link }) => &create_link.hashed.hash,
        Op::RegisterDeleteLink(RegisterDeleteLink { delete_link, .. }) => &delete_link.hashed.hash,
    }
}

pub fn validate_create_example(
    action_hash: &ActionHash,
    action: EntryCreationAction,
    _entry: ExampleEntry,
) -> ExternResult<ValidateCallbackResult> {
    let was_editor = validate_agent_had_undeleted_role_claim_at_the_time(
        action.author(),
        action_hash,
        &String::from("editor"),
        &ZomeName::from("roles_integrity"),
    )?;
    let ValidateCallbackResult::Valid = was_editor else {
        return Ok(was_editor);
    };

    Ok(ValidateCallbackResult::Valid)
}

#[hdk_extern]
pub fn validate(op: Op) -> ExternResult<ValidateCallbackResult> {
    match op.flattened::<EntryTypes, ()>()? {
        FlatOp::StoreEntry(store_entry) => match store_entry {
            OpEntry::CreateEntry { app_entry, action } => match app_entry {
                EntryTypes::Example(example) => validate_create_example(
                    action_hash(&op),
                    EntryCreationAction::Create(action),
                    example,
                ),
            },
            _ => Ok(ValidateCallbackResult::Valid),
        },
        FlatOp::StoreRecord(store_record) => match store_record {
            OpRecord::CreateEntry { app_entry, action } => match app_entry {
                EntryTypes::Example(example) => validate_create_example(
                    action_hash(&op),
                    EntryCreationAction::Create(action),
                    example,
                ),
            },

            _ => Ok(ValidateCallbackResult::Valid),
        },
        _ => Ok(ValidateCallbackResult::Valid),
    }
}
