import { hashProperty, sharedStyles } from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import { SignalWatcher } from '@holochain-open-dev/signals';
import { AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { adminRoleConfig } from '../role-config.js';
import { RolesStore } from '../roles-store.js';

@customElement('roles-for-agent')
export class RolesForAgent extends SignalWatcher(LitElement) {
	@property(hashProperty('agent'))
	agent!: AgentPubKey;

	@consume({ context: rolesStoreContext, subscribe: true })
	rolesStore!: RolesStore;

	roleSingularName(role: string) {
		if (role === adminRoleConfig.role) return adminRoleConfig.singular_name;
		return this.rolesStore.config.roles_config.find(r => r.role === role)
			?.singular_name;
	}

	renderRoles(roles: string[]) {
		return html`<div class="row" part="roles-container" style="gap: 4px;">
			${roles.map(
				role => html`<sl-tag>${this.roleSingularName(role)}</sl-tag>`,
			)}
		</div>`;
	}

	render() {
		const rolesForAssignee = this.rolesStore.rolesForAgent
			.get(this.agent)
			.get();

		switch (rolesForAssignee.status) {
			case 'pending':
				return html``;
			case 'error':
				return html`<display-error
					.error=${rolesForAssignee.error}
					.headline=${msg('Error fetching the roles for this member.')}
					tooltip
				></display-error>`;
			case 'completed':
				return this.renderRoles(rolesForAssignee.value);
		}
	}

	static styles = sharedStyles;
}
