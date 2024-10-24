use hc_zome_trait_notifications::NotificationsZomeTrait;
use hc_zome_traits::implemented_zome_traits;
use hdk::prelude::*;
use notifications::{send_roles_notification, RolesNotification, RolesNotifications};
use profiles::{get_agents_for_profile, get_my_profile_hash};
use remote_signal::RolesRemoteSignal;
use roles_integrity::*;

pub mod assignees;
pub mod progenitors;
pub mod remote_signal;
pub mod role_claim;
pub mod utils;

pub mod notifications;
pub mod profiles;

#[implemented_zome_traits]
pub enum ZomeTraits {
    Notifications(RolesNotifications),
}

///initial function called when entering happ (if Agent is progenitor then Admin role is claimed)
#[hdk_extern]
pub fn init(_: ()) -> ExternResult<InitCallbackResult> {
    let agent_info = agent_info()?;
    let progenitors = progenitors(())?;

    if progenitors.contains(&agent_info.agent_initial_pubkey) {
        schedule("claim_admin_role_as_progenitor")?;
    }
    schedule("claim_roles_assigned_to_me")?;
    let mut fns: BTreeSet<GrantedFunction> = BTreeSet::new();
    fns.insert((zome_info()?.name, FunctionName::from("recv_remote_signal")));
    let functions = GrantedFunctions::Listed(fns);
    let cap_grant = ZomeCallCapGrant {
        tag: String::from("recv_remote_signal"),
        access: CapAccess::Unrestricted,
        functions,
    };
    create_cap_grant(cap_grant)?;

    Ok(InitCallbackResult::Pass)
}

///Signals available in the module
#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
pub enum Signal {
    EntryCreated {
        action: SignedActionHashed,
        app_entry: EntryTypes,
    },
    EntryUpdated {
        action: SignedActionHashed,
        app_entry: EntryTypes,
        original_app_entry: EntryTypes,
    },
    EntryDeleted {
        action: SignedActionHashed,
        original_app_entry: EntryTypes,
    },
    LinkCreated {
        action: SignedActionHashed,
        link_type: LinkTypes,
    },
    LinkDeleted {
        action: SignedActionHashed,
        create_link_action: SignedActionHashed,
        link_type: LinkTypes,
    },
}

///Commiting an action to the source chain
#[hdk_extern(infallible)]
pub fn post_commit(committed_actions: Vec<SignedActionHashed>) {
    for action in committed_actions {
        if let Action::CreateLink(create_link) = &action.hashed.content {
            if let Ok(Some(LinkTypes::RoleToAssignee)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                if let Err(err) = notify_assignees(&action.hashed.hash, create_link) {
                    error!("Error notifying assingee: {:?}", err);
                }
            }
            if let Ok(Some(LinkTypes::PendingUnassignments)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                if let Err(err) = notify_assignees(&action.hashed.hash, create_link) {
                    error!("Error notifying assingee: {:?}", err);
                }
            }
        }
        if let Err(err) = signal_action(action) {
            error!("Error signaling new action: {:?}", err);
        }
    }
}

fn notify_assignees(
    action_hash: &ActionHash,
    assign_role_create_link: &CreateLink,
) -> ExternResult<()> {
    let Some(assignee_profile_action_hash) = assign_role_create_link
        .target_address
        .clone()
        .into_action_hash()
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: RoleToAssignee link does not point to an ActionHash"
        ))));
    };
    let agents = get_agents_for_profile(assignee_profile_action_hash.clone())?;

    let Ok(role) = String::from_utf8(assign_role_create_link.tag.0.clone()) else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "RoleToAssignee links must contain the role in their LinkTag",
        ))));
    };

    send_remote_signal(
        RolesRemoteSignal::NewRoleAssigned {
            role: role.clone(),
            assign_role_create_link_hash: action_hash.clone(),
        },
        agents,
    )?;
    send_roles_notification(
        assignee_profile_action_hash,
        RolesNotification::AssignedRole { role },
    )?;

    Ok(())
}

fn notify_pending_unassignment(
    action_hash: &ActionHash,
    pending_unassignment_create_link: &CreateLink,
) -> ExternResult<()> {
    let Some(assignee_profile_action_hash) = pending_unassignment_create_link
        .target_address
        .clone()
        .into_action_hash()
    else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Unreachable: RoleToAssignee link does not point to an ActionHash"
        ))));
    };
    let agents = get_agents_for_profile(assignee_profile_action_hash.clone())?;

    let Ok(role) = String::from_utf8(pending_unassignment_create_link.tag.0.clone()) else {
        return Err(wasm_error!(WasmErrorInner::Guest(format!(
            "RoleToAssignee links must contain the role in their LinkTag",
        ))));
    };

    send_remote_signal(
        RolesRemoteSignal::NewPendingUnassignment {
            role: role.clone(),
            pending_unassignment_create_link_hash: action_hash.clone(),
        },
        agents,
    )?;
    send_roles_notification(
        assignee_profile_action_hash,
        RolesNotification::UnassignedRole { role },
    )?;

    Ok(())
}

///Generate signals to handle all the actions made with module
fn signal_action(action: SignedActionHashed) -> ExternResult<()> {
    match action.hashed.content.clone() {
        Action::Create(_create) => {
            if let Ok(Some(app_entry)) = get_entry_for_action(&action.hashed.hash) {
                emit_signal(Signal::EntryCreated { action, app_entry })?;
            }
            Ok(())
        }
        Action::Update(update) => {
            if let Ok(Some(app_entry)) = get_entry_for_action(&action.hashed.hash) {
                if let Ok(Some(original_app_entry)) =
                    get_entry_for_action(&update.original_action_address)
                {
                    emit_signal(Signal::EntryUpdated {
                        action,
                        app_entry,
                        original_app_entry,
                    })?;
                }
            }
            Ok(())
        }
        Action::Delete(delete) => {
            if let Ok(Some(original_app_entry)) = get_entry_for_action(&delete.deletes_address) {
                emit_signal(Signal::EntryDeleted {
                    action,
                    original_app_entry,
                })?;
            }
            Ok(())
        }
        Action::CreateLink(create_link) => {
            if let Ok(Some(link_type)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                emit_signal(Signal::LinkCreated { action, link_type })?;
            }
            Ok(())
        }
        Action::DeleteLink(delete_link) => {
            let record = get(delete_link.link_add_address.clone(), GetOptions::default())?.ok_or(
                wasm_error!(WasmErrorInner::Guest(
                    "Failed to fetch CreateLink action".to_string()
                )),
            )?;
            match record.action() {
                Action::CreateLink(create_link) => {
                    if let Ok(Some(link_type)) =
                        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                    {
                        emit_signal(Signal::LinkDeleted {
                            action,
                            link_type,
                            create_link_action: record.signed_action.clone(),
                        })?;
                    }
                    Ok(())
                }
                _ => Err(wasm_error!(WasmErrorInner::Guest(
                    "Create Link should exist".to_string()
                ))),
            }
        }
        _ => Ok(()),
    }
}

///Retrieve entry for a specific action
fn get_entry_for_action(action_hash: &ActionHash) -> ExternResult<Option<EntryTypes>> {
    let record = match get_details(action_hash.clone(), GetOptions::default())? {
        Some(Details::Record(record_details)) => record_details.record,
        _ => return Ok(None),
    };
    let entry = match record.entry().as_option() {
        Some(entry) => entry,
        None => return Ok(None),
    };
    let (zome_index, entry_index) = match record.action().entry_type() {
        Some(EntryType::App(AppEntryDef {
            zome_index,
            entry_index,
            ..
        })) => (zome_index, entry_index),
        _ => return Ok(None),
    };
    EntryTypes::deserialize_from_type(*zome_index, *entry_index, entry)
}
