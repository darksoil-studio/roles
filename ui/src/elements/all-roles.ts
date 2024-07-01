import {
	hashProperty,
	sharedStyles,
	wrapPathInSvg,
} from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import { AsyncResult, SignalWatcher } from '@holochain-open-dev/signals';
import { ActionHash, AgentPubKey, EntryHash, Record } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiDelete, mdiInformationOutline } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RolesStore } from '../roles-store.js';
import { joinAsyncMap, mapValues, slice } from '../signal.js';

/**
 * @element all-roles
 */
@localized()
@customElement('all-roles')
export class AllRoles extends SignalWatcher(LitElement) {
	/**
	 * @internal
	 */
	@consume({ context: rolesStoreContext, subscribe: true })
	rolesStore!: RolesStore;

	renderRole(role: string, assignees: AgentPubKey[]) {
		return html`<div class="column">
			<span class="title"
				>${this.rolesStore.config.roles_config[role].name}</span
			>

			<sl-divider></sl-divider>
			<span>${this.rolesStore.config.roles_config[role].description}</span>

			<div class="column" style="gap: 8px; margin-top: 8px">
				${assignees.map(
					a => html`
						<div class="row" style="align-items: center">
							<profile-list-item .agentPubKey=${a}></profile-list-item>
							<span style="flex: 1"></span>

							<sl-icon-button .src=${wrapPathInSvg(mdiDelete)}></sl-icon-button>
						</div>
					`,
				)}
			</div>
		</div>`;
	}

	renderRoles(assignees: ReadonlyMap<string, AgentPubKey[]>) {
		if (assignees.size === 0)
			return html` <div class="column center-content" style="gap: 16px;">
				<sl-icon
					.src=${wrapPathInSvg(mdiInformationOutline)}
					style="color: grey; height: 64px; width: 64px;"
				></sl-icon>
				<span class="placeholder">${msg('No roles found.')}</span>
			</div>`;

		return html`
			<div class="column" style="gap: 16px; flex: 1">
				${Array.from(assignees.entries()).map(([role, assignees]) =>
					this.renderRole(role, assignees),
				)}
			</div>
		`;
	}

	assigneesByRole(): AsyncResult<ReadonlyMap<string, AgentPubKey[]>> {
		const roles = this.rolesStore.allRoles.get();
		if (roles.status !== 'completed') return roles;

		return joinAsyncMap(
			mapValues(slice(this.rolesStore.assignees, roles.value), r => r.get()),
		);
	}

	render() {
		const assignees = this.assigneesByRole();

		switch (assignees.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the roles.')}
					.error=${assignees.error}
				></display-error>`;
			case 'completed':
				return this.renderRoles(assignees.value);
		}
	}

	static styles = [sharedStyles];
}
