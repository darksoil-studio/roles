use hdi::prelude::*;
use roles_types::validate_agent_had_undeleted_role_claim_at_the_time_with_zome_index;

///Hardcoded admin role need for creating other roles
pub const ADMIN_ROLE: &'static str = "admin";

///Validating that the Agent had a claim of the ADMIN_ROLE in their source chain prior to some action
pub fn validate_agent_was_admin_at_the_time(
    agent: &AgentPubKey,
    chain_top: &ActionHash,
) -> ExternResult<ValidateCallbackResult> {
    validate_agent_had_undeleted_role_claim_at_the_time_with_zome_index(
        agent,
        chain_top,
        &ADMIN_ROLE.to_string(),
        zome_info()?.id,
    )
}
