import {
	hashProperty,
	hashState,
	notifyError,
	onSubmit,
	sharedStyles,
	wrapPathInSvg,
} from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import { SignalWatcher } from '@holochain-open-dev/signals';
import { EntryRecord } from '@holochain-open-dev/utils';
import {
	ActionHash,
	AgentPubKey,
	DnaHash,
	EntryHash,
	Record,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiAlertCircleOutline, mdiDelete } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { rolesStoreContext } from '../context.js';
import { RolesStore } from '../roles-store.js';
import { RoleClaim } from '../types.js';

/**
 * @element create-role-claim
 * @fires role-claim-created: detail will contain { roleClaimHash }
 */
@localized()
@customElement('create-role-claim')
export class CreateRoleClaim extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The assign role create link hash for this RoleClaim
	 */
	@property(hashProperty('assign-role-create-link-hash'))
	assignRoleCreateLinkHash!: ActionHash;

	/**
	 * @internal
	 */
	@consume({ context: rolesStoreContext, subscribe: true })
	rolesStore!: RolesStore;

	/**
	 * @internal
	 */
	@state()
	committing = false;

	/**
	 * @internal
	 */
	@query('#create-form')
	form!: HTMLFormElement;

	async createRoleClaim(fields: Partial<RoleClaim>) {
		if (this.assignRoleCreateLinkHash === undefined)
			throw new Error(
				'Cannot create a new Role Claim without its assign_role_create_link_hash field',
			);

		const roleClaim: RoleClaim = {
			role: fields.role!,
			assign_role_create_link_hash: this.assignRoleCreateLinkHash!,
		};

		try {
			this.committing = true;
			const record: EntryRecord<RoleClaim> =
				await this.rolesStore.client.createRoleClaim(roleClaim);

			this.dispatchEvent(
				new CustomEvent('role-claim-created', {
					composed: true,
					bubbles: true,
					detail: {
						roleClaimHash: record.actionHash,
					},
				}),
			);

			this.form.reset();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error creating the role claim'));
		}
		this.committing = false;
	}

	render() {
		return html` <sl-card style="flex: 1;">
			<span slot="header">${msg('Create Role Claim')}</span>

			<form
				id="create-form"
				class="column"
				style="flex: 1; gap: 16px;"
				${onSubmit(fields => this.createRoleClaim(fields))}
			>
				<sl-input name="role" .label=${msg('Role Name')} required></sl-input>

				<sl-button variant="primary" type="submit" .loading=${this.committing}
					>${msg('Create Role Claim')}</sl-button
				>
			</form>
		</sl-card>`;
	}

	static styles = [sharedStyles];
}
