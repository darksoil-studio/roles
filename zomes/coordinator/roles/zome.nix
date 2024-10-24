{ inputs, ... }:

{
  perSystem = { inputs', system, self', ... }: rec {
    builders.roles =
      { notifications_coordinator_zome_name, profiles_coordinator_zome_name }:
      inputs.hc-infra.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts = inputs'.hc-infra.packages.zomeCargoArtifacts;
        zomeEnvironmentVariables = {
          NOTIFICATIONS_COORDINATOR_ZOME_NAME =
            notifications_coordinator_zome_name;
          PROFILES_COORDINATOR_ZOME_NAME = profiles_coordinator_zome_name;
        };
      };
    packages.roles = builders.roles {
      notifications_coordinator_zome_name = "notifications";
      profiles_coordinator_zome_name = "profiles";
    };
  };
}

