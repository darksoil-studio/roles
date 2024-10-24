use hdk::prelude::*;
use roles_integrity::RoleClaim;

use crate::{role_claim::create_role_claim, unassignments::unassign_my_role};

#[derive(Serialize, Deserialize, Debug)]
pub enum RolesRemoteSignal {
    NewRoleAssigned {
        role: String,
        assign_role_create_link_hash: ActionHash,
    },
    NewPendingUnassignment {
        role: String,
        pending_unassignment_create_link_hash: ActionHash,
    },
}

#[hdk_extern]
pub fn recv_remote_signal(signal: RolesRemoteSignal) -> ExternResult<()> {
    match signal {
        RolesRemoteSignal::NewRoleAssigned {
            role,
            assign_role_create_link_hash,
        } => create_role_claim(RoleClaim {
            role,
            assign_role_create_link_hash,
        }),
        RolesRemoteSignal::NewPendingUnassignment {
            pending_unassignment_create_link_hash,
            ..
        } => unassign_my_role(pending_unassignment_create_link_hash),
    }
}
