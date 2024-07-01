{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.roles_test_dna = inputs.hc-infra.outputs.lib.dna {
      dnaManifest = ./dna.yaml;
      holochain = inputs'.holochain;
      zomes = let
        example = inputs.hc-infra.outputs.lib.rustZome {
          workspacePath = inputs.self.outPath;
          holochain = inputs'.holochain;
          crateCargoToml = ../zomes/coordinator/example/Cargo.toml;
          cargoArtifacts =
            inputs.hc-infra.outputs.lib.zomeCargoArtifacts { inherit system; };
        };
        example_integrity = inputs.hc-infra.outputs.lib.rustZome {
          workspacePath = inputs.self.outPath;
          holochain = inputs'.holochain;
          crateCargoToml = ../zomes/integrity/example/Cargo.toml;
          cargoArtifacts =
            inputs.hc-infra.outputs.lib.zomeCargoArtifacts { inherit system; };
        };
      in {
        inherit example example_integrity;
        # Include here the zome packages for this DNA, e.g.:
        profiles_integrity = inputs'.profiles.packages.profiles_integrity;
        profiles = inputs'.profiles.packages.profiles;
        # This overrides all the "bundled" properties for the DNA manifest
        roles_integrity = self'.packages.roles_integrity;
        roles = self'.packages.roles;
      };
    };
  };
}

