use hdi::prelude::*;

use crate::had_role_claim_at_the_time;

pub const ADMIN_ROLE: &'static str = "ADMIN";

pub fn was_admin_at_the_time(agent: &AgentPubKey, chain_top: &ActionHash) -> ExternResult<bool> {
    had_role_claim_at_the_time(agent, chain_top, &ADMIN_ROLE.to_string())
}
