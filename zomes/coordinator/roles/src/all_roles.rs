use hdk::prelude::*;
use roles_integrity::*;

#[hdk_extern]
pub fn get_all_roles() -> ExternResult<Vec<Link>> {
    let path = Path::from("all_roles");
    get_links(
        GetLinksInputBuilder::try_new(path.path_entry_hash()?, LinkTypes::AllRoles)?
            .build(),
    )
}
