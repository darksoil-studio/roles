use hdi::prelude::*;

use crate::validate_agent_had_undeleted_role_claim_at_the_time;

pub const ADMIN_ROLE: &'static str = "ADMIN";

pub fn validate_agent_was_admin_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
) -> ExternResult<ValidateCallbackResult> {
    validate_agent_had_undeleted_role_claim_at_the_time(agent, chain_top, &ADMIN_ROLE.to_string())
}
