{ inputs, ... }:

{
  perSystem = { inputs', system, ... }: rec {
    builders.roles_integrity = { profiles_integrity_zome_name }:
      inputs.hc-infra.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts = inputs'.hc-infra.packages.zomeCargoArtifacts;
        zomeEnvironmentVars = {
          PROFILES_INTEGRITY_ZOME_NAME = profiles_integrity_zome_name;
        };
      };

    packages.roles_integrity = builders.roles_integrity {
      profiles_integrity_zome_name = "profiles_integrity";
    };
  };
}

