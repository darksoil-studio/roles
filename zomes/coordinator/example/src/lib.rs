use example_integrity::*;
use hdk::prelude::*;

#[hdk_extern]
pub fn create_example(example: ExampleEntry) -> ExternResult<ActionHash> {
    create_entry(&EntryTypes::Example(example))
}
