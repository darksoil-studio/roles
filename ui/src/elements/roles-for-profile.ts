import { hashProperty, sharedStyles } from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import {
	ProfilesStore,
	profilesStoreContext,
} from '@holochain-open-dev/profiles';
import {
	AsyncResult,
	SignalWatcher,
	joinAsync,
} from '@holochain-open-dev/signals';
import { ActionHash, AgentPubKey } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { adminRoleConfig } from '../role-config.js';
import { RolesStore } from '../roles-store.js';

function uniquify(strings: string[]): string[] {
	return Array.from(new Set(strings));
}
function flatten<T>(strings: T[][]): T[] {
	return ([] as T[]).concat(...strings);
}

@customElement('roles-for-profile')
export class RolesForProfile extends SignalWatcher(LitElement) {
	@property(hashProperty('profile-hash'))
	profileHash!: ActionHash;

	@consume({ context: rolesStoreContext, subscribe: true })
	rolesStore!: RolesStore;

	/**
	 * @internal
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	profilesStore!: ProfilesStore;

	roleSingularName(role: string) {
		if (role === adminRoleConfig.role) return adminRoleConfig.singular_name;
		return this.rolesStore.config.roles_config.find(r => r.role === role)
			?.singular_name;
	}

	renderRoles(roles: string[]) {
		return html`<div class="row" part="body" style="gap: 4px;">
			${roles.map(
				role => html`<sl-tag>${this.roleSingularName(role)}</sl-tag>`,
			)}
		</div>`;
	}

	render() {
		const roles = this.rolesStore.rolesForProfile.get(this.profileHash).get();

		switch (roles.status) {
			case 'pending':
				return html``;
			case 'error':
				return html`<display-error
					.error=${roles.error}
					.headline=${msg('Error fetching the roles for this member.')}
					tooltip
				></display-error>`;
			case 'completed':
				return this.renderRoles(roles.value);
		}
	}

	static styles = sharedStyles;
}
