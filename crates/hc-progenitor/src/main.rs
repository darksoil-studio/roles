use std::path::PathBuf;

use anyhow::anyhow;
use clap::{Parser, Subcommand};

mod run;
use holochain_client::AdminWebsocket;
use run::*;

mod config;
use config::*;
use tokio::runtime::Runtime;

#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Cli {
    #[arg(long)]
    workdir: PathBuf,

    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand, Debug)]
enum Commands {
    /// does testing things
    Run(RunArgs),
    PrintProgenitor,
}

fn main() -> anyhow::Result<()> {
    let args = Cli::parse();

    match args.command {
        Commands::Run(run_args) => run(args.workdir, run_args),
        Commands::PrintProgenitor => {
            let runtime = Runtime::new()?;
            let result: anyhow::Result<()> = runtime.block_on(async move {
                let config = get_config(&args.workdir)?;
                let admin_ws =
                    AdminWebsocket::connect(format!("http://127.0.0.1:{}", config.admin_port))
                        .await?;

                let apps = admin_ws
                    .list_apps(None)
                    .await
                    .map_err(|err| anyhow!("Could not list apps: {err:?}"))?;

                let progenitor_app = apps
                    .into_iter()
                    .find(|app| app.installed_app_id.eq(&config.progenitor_app_id))
                    .ok_or(anyhow!(
                        "Could not find progenitor's app: {}",
                        config.progenitor_app_id
                    ))?;

                println!("{:?}", progenitor_app.agent_pub_key);
                Ok(())
            });
            result?;
        }
    }

    Ok(())
}
