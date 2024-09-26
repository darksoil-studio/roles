{ inputs, ... }:

{
  perSystem = { inputs', pkgs, system, lib, ... }: {
    packages.hc-progenitor = let
      craneLib = inputs.crane.mkLib pkgs;

      cratePath = ./.;

      cargoToml =
        builtins.fromTOML (builtins.readFile "${cratePath}/Cargo.toml");
      crate = cargoToml.package.name;

      commonArgs = {
        src = (inputs.p2p-shipyard.lib.cleanTauriSource { inherit lib; })
          (craneLib.path ../../.);
        doCheck = false;
        buildInputs =
          inputs.p2p-shipyard.outputs.dependencies.${system}.tauriHapp.buildInputs;
        nativeBuildInputs =
          inputs.p2p-shipyard.outputs.dependencies.${system}.tauriHapp.nativeBuildInputs;
        postPatch = ''
          mkdir -p "$TMPDIR/nix-vendor"
          cp -Lr "$cargoVendorDir" -T "$TMPDIR/nix-vendor"
          sed -i "s|$cargoVendorDir|$TMPDIR/nix-vendor/|g" "$TMPDIR/nix-vendor/config.toml"
          chmod -R +w "$TMPDIR/nix-vendor"
          cargoVendorDir="$TMPDIR/nix-vendor"
        '';
      };
    in craneLib.buildPackage (commonArgs // {
      pname = crate;
      version = cargoToml.package.version;
    });
  };
}

