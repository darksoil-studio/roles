use serde::de::DeserializeOwned;
use std::collections::BTreeMap;
use xliff::t::T;

use hc_zome_trait_notifications::*;
use hc_zome_traits::*;
use hdk::prelude::*;
use notifications_types::SendNotificationInput;

use crate::profiles::call_local_zome;

pub fn notifications_zome_name() -> ZomeName {
    match std::option_env!("NOTIFICATIONS_COORDINATOR_ZOME_NAME") {
        Some(zome_name) => zome_name.into(),
        None => ZomeName::from("notifications"),
    }
}

pub struct RolesNotifications;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
#[serde(tag = "type")]
pub enum RolesNotification {
    AssignedRole { role: String },
    UnassignedRole { role: String },
}
impl RolesNotification {
    fn role(&self) -> String {
        match self {
            Self::AssignedRole { role } => role.clone(),
            Self::UnassignedRole { role } => role.clone(),
        }
    }
    fn notification_type(&self) -> String {
        match self {
            Self::AssignedRole { .. } => format!("AssignedRole"),
            Self::UnassignedRole { .. } => format!("UnassignedRole"),
        }
    }
}

#[implement_zome_trait_as_externs]
impl NotificationsZomeTrait for RolesNotifications {
    fn get_notifications_types(locale: String) -> ExternResult<BTreeMap<String, NotificationType>> {
        let mut types: BTreeMap<String, NotificationType> = BTreeMap::new();

        types.insert(
            "AssignedRole".into(),
            NotificationType {
                name: t(&locale, "Role assigned"),
                description: t(&locale, "An administrator assigned a role to you"),
            },
        );

        types.insert(
            "UnassignedRole".into(),
            NotificationType {
                name: t(&locale, "Role removed"),
                description: t(&locale, "An administrator removed one of your roles"),
            },
        );

        Ok(types)
    }
    fn get_notification_contents(
        input: GetNotificationContentsInput,
    ) -> ExternResult<NotificationContents> {
        let notification = RolesNotification::try_from(input.notification.content)
            .map_err(|err| wasm_error!(err))?;

        match notification {
            RolesNotification::AssignedRole { role } => Ok(NotificationContents {
                title: t(&input.locale, ""),
                body: format!(
                    "{} {}",
                    t(&input.locale, "You have been assigned the role"),
                    role
                ),
                icon_src: String::from(""),
                url_path_to_navigate_to_on_click: String::from(""),
            }),
            RolesNotification::UnassignedRole { role } => Ok(NotificationContents {
                title: t(&input.locale, ""),
                body: format!(
                    "{} {}",
                    t(&input.locale, "An administrator removed your role:"),
                    role
                ),
                icon_src: String::from(""),
                url_path_to_navigate_to_on_click: String::from(""),
            }),
        }
    }
}

fn t(locale: &String, source: &str) -> String {
    match locale.as_str() {
        // "sv" => t_from_xliff(include_str!("../../../../ui/xliff/sv.xlf"), source),
        "en" => source.to_string(),
        _ => source.to_string(),
    }
}

fn t_from_xliff(xliff_str: &str, source: &str) -> String {
    let t = T::load_str(xliff_str);
    let unit = t.t_source(None, source);
    if let Some(unit) = unit {
        if let Some(t) = unit.target_text() {
            return t.clone();
        }
    }
    source.to_string()
}

fn call_notifications<R, P>(fn_name: FunctionName, payload: P) -> ExternResult<R>
where
    P: serde::Serialize + std::fmt::Debug,
    R: DeserializeOwned + std::fmt::Debug,
{
    call_local_zome(notifications_zome_name(), fn_name, payload)
}

pub fn send_roles_notification(
    recipient_profile_hash: ActionHash,
    roles_notification: RolesNotification,
) -> ExternResult<()> {
    call_notifications(
        "send_notification".into(),
        SendNotificationInput {
            zome_name: zome_info()?.name,
            notification_type: roles_notification.notification_type(),
            notification_group: format!("{recipient_profile_hash}-{}", roles_notification.role()),
            recipient_profile_hash,
            content: SerializedBytes::try_from(roles_notification)
                .map_err(|err| wasm_error!(err))?,
        },
    )
}
