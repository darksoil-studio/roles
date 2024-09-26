{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.roles_test_dna = inputs.hc-infra.outputs.builders.${system}.dna {
      dnaManifest = ./dna.yaml;
      zomes = let
        example = inputs.hc-infra.outputs.builders.${system}.rustZome {
          workspacePath = inputs.self.outPath;
          crateCargoToml = ../zomes/coordinator/example/Cargo.toml;
          cargoArtifacts = inputs'.hc-infra.packages.zomeCargoArtifacts;
        };
        example_integrity =
          inputs.hc-infra.outputs.builders.${system}.rustZome {
            workspacePath = inputs.self.outPath;
            crateCargoToml = ../zomes/integrity/example/Cargo.toml;
            cargoArtifacts = inputs'.hc-infra.packages.zomeCargoArtifacts;
          };
      in {
        inherit example example_integrity;
        # Include here the zome packages for this DNA, e.g.:
        profiles_integrity = inputs'.profiles.packages.profiles_integrity;
        profiles = inputs'.profiles.packages.profiles;
        notifications_integrity =
          inputs'.notifications.packages.notifications_integrity;
        notifications = inputs'.notifications.packages.notifications;
        # This overrides all the "bundled" properties for the DNA manifest
        roles_integrity = self'.packages.roles_integrity;
        roles = self'.packages.roles;
      };
    };
  };
}

