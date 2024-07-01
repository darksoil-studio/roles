use hdi::prelude::*;

#[hdk_entry_helper]
pub struct ExampleEntry(String);

#[derive(Serialize, Deserialize)]
#[serde(tag = "type")]
#[hdk_entry_types]
#[unit_enum(UnitEntryTypes)]
pub enum EntryTypes {
    Example(ExampleEntry),
}

pub fn validate_create_example(
    action: EntryCreationAction,
    _entry: ExampleEntry,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Valid)
}

#[hdk_extern]
pub fn validate(op: Op) -> ExternResult<ValidateCallbackResult> {
    match op.flattened::<EntryTypes, ()>()? {
        FlatOp::StoreEntry(store_entry) => match store_entry {
            OpEntry::CreateEntry { app_entry, action } => match app_entry {
                EntryTypes::Example(example) => {
                    validate_create_example(EntryCreationAction::Create(action), example)
                }
            },
            _ => Ok(ValidateCallbackResult::Valid),
        },
        FlatOp::StoreRecord(store_record) => match store_record {
            OpRecord::CreateEntry { app_entry, action } => match app_entry {
                EntryTypes::Example(example) => {
                    validate_create_example(EntryCreationAction::Create(action), example)
                }
            },

            _ => Ok(ValidateCallbackResult::Valid),
        },
        _ => Ok(ValidateCallbackResult::Valid),
    }
}
