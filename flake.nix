rec {
  description = "Template for Holochain app development";

  inputs = {
    versions.url = "github:holochain/holochain?dir=versions/0_3";

    holochain.url = "github:holochain/holochain";
    holochain.inputs.versions.follows = "versions";

    nixpkgs.follows = "holochain/nixpkgs";
    flake-parts.follows = "holochain/flake-parts";

    hc-infra.url = "github:holochain-open-dev/infrastructure";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard/hc-embark";
    scaffolding.url = "github:holochain-open-dev/templates";

    profiles.url = "github:holochain-open-dev/profiles/nixify";
    crane.follows = "hc-infra/crane";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-open-dev.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-open-dev.cachix.org-1:3Tr+9in6uo44Ga7qiuRIfOTFXog+2+YbyhwI/Z6Cp4U="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } rec {
      imports = [
        ./zomes/integrity/roles/zome.nix
        ./zomes/coordinator/roles/zome.nix
        # Just for testing purposes
        ./workdir/dna.nix
        ./workdir/happ.nix
        ./crates/hc-progenitor
      ];

      flake = {
        lib.progenitor-network = { pkgs, system }:
          { happ, roles_to_modify, ui_port }:
          pkgs.writeShellApplication {
            name = "run-network";

            derivationArgs = { allowSubstitutes = false; };

            runtimeInputs = [
              happ
              (outputs inputs).packages.${system}.hc-progenitor
              inputs.p2p-shipyard.outputs.packages.${system}.hc-embark
            ];

            text = ''
              ${
                pkgs.writeScript "network" (builtins.readFile ./network.sh)
              } ${happ} ${roles_to_modify} ${builtins.toString ui_port}
            '';
          };
      };

      systems = builtins.attrNames inputs.holochain.devShells;
      perSystem = { inputs', self', config, pkgs, system, ... }: {

        packages.network = (pkgs.callPackage flake.lib.progenitor-network { }) {
          happ = self'.packages.roles_test_happ;
          roles_to_modify = "roles_test";
          ui_port = 8888;
        };

        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.hc-infra.devShells.synchronized-pnpm
            inputs'.p2p-shipyard.devShells.holochainTauriDev
          ];

          packages = [ inputs'.scaffolding.packages.hc-scaffold-zome-template ];
        };

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.hc-infra.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "roles \
                --integrity-zome-name roles_integrity \
                --coordinator-zome-name roles \
                --remote-zome-git-url github:darksoil-studio/roles \
                --remote-npm-package-name roles \
                --remote-npm-package-path ui" \
                --remote-zome-git-branch main \ 
          '';
        };
      };
    };
}
