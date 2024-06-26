{ inputs, ... }:

{
  perSystem =
    { inputs'
    , self'
    , lib
    , ...
    }: {
  	  packages.roles_test_dna = inputs.hc-infra.outputs.lib.dna {
        dnaManifest = ./dna.yaml;
        holochain = inputs'.holochain;
        zomes = {
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

