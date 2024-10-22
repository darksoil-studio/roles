use std::collections::BTreeMap;

use hc_zome_trait_notifications::*;
use hc_zome_traits::*;
use hdk::prelude::*;
use xliff::t::T;

pub struct RolesNotifications;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
#[serde(tag = "type")]
pub enum RolesNotification {
    AssignedRole { role: String },
    UnassignedRole { role: String },
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

fn t(locale: &String, source: &str) -> String {
    match locale.as_str() {
        // "sv" => t_from_xliff(include_str!("../../../../ui/xliff/sv.xlf"), source),
        "en" => source.to_string(),
        _ => source.to_string(),
    }
}
