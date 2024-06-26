use hdk::prelude::*;
use holochain::sweettest::*;

use roles_integrity::*;



pub async fn sample_role_claim_1(conductor: &SweetConductor, zome: &SweetZome) -> RoleClaim {
    RoleClaim {
	  role_name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.".to_string(),
	  assign_role_create_link_hash: ::fixt::fixt!(ActionHash),
    }
}

pub async fn sample_role_claim_2(conductor: &SweetConductor, zome: &SweetZome) -> RoleClaim {
    RoleClaim {
	  role_name: "Lorem ipsum 2".to_string(),
	  assign_role_create_link_hash: ::fixt::fixt!(ActionHash),
    }
}

pub async fn create_role_claim(conductor: &SweetConductor, zome: &SweetZome, role_claim: RoleClaim) -> Record {
    let record: Record = conductor
        .call(zome, "create_role_claim", role_claim)
        .await;
    record
}

