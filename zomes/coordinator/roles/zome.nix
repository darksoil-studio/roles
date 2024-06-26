{ inputs, ... }:

{
  perSystem =
    { inputs'
    , system
    , self'
    , ...
    }: rec {
      packages.roles = inputs.hc-infra.outputs.lib.rustZome {
        workspacePath = inputs.self.outPath;
        holochain = inputs'.holochain;
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts =
          inputs.hc-infra.outputs.lib.zomeCargoArtifacts { inherit system; };
      };

      # Test only this zome and its integrity in isolation
      checks.roles = inputs.hc-infra.outputs.lib.sweettest {
        workspacePath = inputs.self.outPath;
        holochain = inputs'.holochain;
        dna = (inputs.hc-infra.outputs.lib.dna {
          dnaManifest = builtins.toFile "dna.yaml" ''
            ---
            manifest_version: "1"
            name: test_dna
            integrity:
              network_seed: ~
              properties: ~
              origin_time: 1709638576394039
              zomes: 
                - name: roles_integrity
            coordinator:
              zomes:
                - name: roles
                  hash: ~
                  dependencies: 
                    - name: roles_integrity
                  dylib: ~
          '';
          zomes = {
            roles_integrity = self'.packages.roles_integrity;
            roles = packages.roles;
          };
          holochain = inputs'.holochain;
        });
        crateCargoToml = ./Cargo.toml;
        cargoArtifacts = inputs.hc-infra.outputs.lib.holochainCargoArtifacts {
          inherit system;
        };
      };

    };
}

