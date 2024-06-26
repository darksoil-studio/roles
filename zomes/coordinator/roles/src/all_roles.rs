use hdk::prelude::*;
use roles_integrity::*;

#[hdk_extern]
pub fn get_all_roles() -> ExternResult<Vec<Link>> {
    let path = all_roles_path()?;
    get_links(GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::RolesPath)?.build())
}
