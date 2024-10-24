use anyhow::anyhow;
use clap::Parser;
use holochain_client::{AgentPubKey, AppInfo};
use holochain_types::{
    app::{AppBundle, AppManifest, InstallAppPayload},
    prelude::YamlProperties,
};
use lair_keystore::dependencies::tokio::fs;
use roles_types::Properties;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::PathBuf;
use tauri::{AppHandle, Context, Wry};
use tauri_plugin_holochain::{HolochainExt, HolochainPluginConfig, WANNetworkConfig};
use url2::url2;

use crate::{config_file_path, Config};

#[derive(Parser, Serialize, Deserialize, Debug)]
pub struct RunArgs {
    /// The path of the file tree to modify.
    pub happ_bundle_path: PathBuf,

    /// The bundle identifier for the Tauri app
    #[clap(long)]
    pub progenitor_dna_role: String,

    /// The bundle identifier for the Tauri app
    #[clap(long)]
    pub ui_port: String,

    /// The bundle identifier for the Tauri app
    #[clap(long)]
    pub network_seed: Option<String>,

    /// The bundle identifier for the Tauri app
    #[clap(long)]
    pub signal_url: Option<String>,

    /// The bundle identifier for the Tauri app
    #[clap(long)]
    pub bootstrap_url: Option<String>,
}

pub fn run(workdir: PathBuf, args: RunArgs) {
    let conductor_dir = workdir.join("conductor");

    let dev_url = url2!("http://localhost:{}", args.ui_port);

    let mut context: Context<Wry> = tauri::generate_context!();
    context.config_mut().build.dev_url = Some(dev_url.into());

    let wan_network_config = match (args.signal_url, args.bootstrap_url) {
        (Some(signal_url), Some(bootstrap_url)) => Some(WANNetworkConfig {
            signal_url: url2!("{}", signal_url),
            bootstrap_url: url2!("{}", bootstrap_url),
        }),
        (None, None) => None,
        (Some(_), None) => {
            panic!("Invalid arguments: --signal-url was provided without --bootstrap-url")
        }
        (None, Some(_)) => {
            panic!("Invalid arguments: --bootstrap-url was provided without --signal-url")
        }
    };

    tauri::Builder::default()
        .plugin(
            tauri_plugin_log::Builder::default()
                .level(log::LevelFilter::Warn)
                .build(),
        )
        .plugin(tauri_plugin_holochain::init(
            vec![].into(),
            HolochainPluginConfig::new(conductor_dir, wan_network_config),
        ))
        .setup(|app| {
            let handle = app.handle();
            let result: anyhow::Result<()> = tauri::async_runtime::block_on(async move {
                let app_info = setup(
                    handle.clone(),
                    workdir.clone(),
                    args.happ_bundle_path,
                    args.progenitor_dna_role,
                    HashMap::new(),
                    args.network_seed,
                )
                .await?;

                handle
                    .holochain()?
                    .main_window_builder(
                        String::from("main"),
                        false,
                        Some(app_info.installed_app_id.clone()),
                        None,
                    )
                    .await?
                    .build()?;

                let config = Config {
                    admin_port: handle.holochain()?.holochain_runtime.admin_port,
                    progenitor_app_id: app_info.installed_app_id,
                };
                let s = serde_yaml::to_string(&config)?;

                let path = config_file_path(&workdir);
                fs::write(path, s.as_bytes()).await?;

                Ok(())
            });
            result?;

            Ok(())
        })
        .run(context)
        .expect("error while running tauri application");
}

async fn setup(
    handle: AppHandle,
    workdir: PathBuf,
    app_bundle_path: PathBuf,
    role: String,
    membrane_proofs: HashMap<String, std::sync::Arc<holochain_types::prelude::SerializedBytes>>,
    network_seed: Option<String>,
) -> anyhow::Result<AppInfo> {
    let admin_ws = handle.holochain()?.admin_websocket().await?;
    let agent_key = admin_ws
        .generate_agent_pub_key()
        .await
        .map_err(|err| anyhow!("Error generating the agent: {:?}", err))?;

    let new_bundle_path =
        override_properties_in_happ(workdir, app_bundle_path, agent_key.clone(), role).await?;

    let app_info = admin_ws
        .install_app(InstallAppPayload {
            agent_key,
            membrane_proofs,
            network_seed,
            source: holochain_types::app::AppBundleSource::Path(new_bundle_path),
            installed_app_id: None,
        })
        .await
        .map_err(|err| anyhow!("Error installing the app: {err:?}"))?;
    log::info!("Installed app {app_info:?}");

    let response = admin_ws
        .enable_app(app_info.installed_app_id.clone())
        .await
        .map_err(|err| anyhow!("Error enabling the app: {err:?}"))?;

    Ok(response.app)
}

async fn override_properties_in_happ(
    workdir: PathBuf,
    happ_bundle_path: PathBuf,
    progenitor: AgentPubKey,
    role: String,
) -> anyhow::Result<PathBuf> {
    let bytes = fs::read(happ_bundle_path).await?;
    let app_bundle = AppBundle::decode(&bytes)?;

    let inner = app_bundle.into_inner();

    let mut manifest = inner.manifest().clone();

    match &mut manifest {
        AppManifest::V1(v1) => {
            for app_manifest_role in &mut v1.roles {
                if app_manifest_role.name.eq(&role) {
                    let properties = Properties {
                        progenitors: vec![progenitor.clone().into()],
                    };

                    let value = serde_yaml::to_value(properties)?;

                    let yaml_properties = YamlProperties::new(value);

                    app_manifest_role.dna.modifiers.properties = Some(yaml_properties);
                }
            }
        }
    }

    let inner = inner.update_manifest(manifest)?;

    let happ_path = workdir.join("progenitor.happ");
    inner.write_to_file(&happ_path).await?;

    Ok(happ_path)
}
