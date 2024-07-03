use anyhow::anyhow;
use serde::{Deserialize, Serialize};
use std::{
    fs,
    path::PathBuf,
    time::{Duration, SystemTime},
};

pub fn config_file_path(workdir: &PathBuf) -> PathBuf {
    workdir.join("config.yaml")
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Config {
    pub admin_port: u16,
    pub progenitor_app_id: String,
}

pub fn get_config(workdir: &PathBuf) -> anyhow::Result<Config> {
    let config_file = config_file_path(workdir);
    let start = SystemTime::now();

    loop {
        if config_file.exists() {
            let s = fs::read_to_string(config_file)?;
            let config: Config = serde_yaml::from_str(s.as_str())?;
            return Ok(config);
        }
        let elapsed = SystemTime::now().duration_since(start)?;
        if elapsed.as_secs() > 10 {
            return Err(anyhow!("Timed out waiting for the progenitor to be run: run `hc progenitor run` in another terminal and then run other commands in another window"));
        }
        std::thread::sleep(Duration::from_millis(200))
    }
}
