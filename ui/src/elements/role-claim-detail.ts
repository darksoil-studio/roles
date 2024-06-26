import {
	hashProperty,
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import { SignalWatcher } from '@holochain-open-dev/signals';
import { EntryRecord } from '@holochain-open-dev/utils';
import { ActionHash, EntryHash, Record } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiAlertCircleOutline, mdiDelete, mdiPencil } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RolesStore } from '../roles-store.js';
import { RoleClaim } from '../types.js';

/**
 * @element role-claim-detail
 * @fires role-claim-deleted: detail will contain { roleClaimHash }
 */
@localized()
@customElement('role-claim-detail')
export class RoleClaimDetail extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The hash of the RoleClaim to show
	 */
	@property(hashProperty('role-claim-hash'))
	roleClaimHash!: ActionHash;

	/**
	 * @internal
	 */
	@consume({ context: rolesStoreContext, subscribe: true })
	rolesStore!: RolesStore;

	async deleteRoleClaim() {
		try {
			await this.rolesStore.client.deleteRoleClaim(this.roleClaimHash);

			this.dispatchEvent(
				new CustomEvent('role-claim-deleted', {
					bubbles: true,
					composed: true,
					detail: {
						roleClaimHash: this.roleClaimHash,
					},
				}),
			);
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error deleting the role claim'));
		}
	}

	renderDetail(entryRecord: EntryRecord<RoleClaim>) {
		return html`
			<sl-card>
				<div slot="header" class="row" style="gap: 8px">
					<span style="font-size: 18px; flex: 1;">${msg('Role Claim')}</span>

					<sl-icon-button
						.src=${wrapPathInSvg(mdiDelete)}
						@click=${() => this.deleteRoleClaim()}
					></sl-icon-button>
				</div>

				<div class="column" style="gap: 16px;">
					<div class="column" style="gap: 8px;">
						<span><strong>${msg('Role Name')}</strong></span>
						<span style="white-space: pre-line">${entryRecord.entry.role}</span>
					</div>
				</div>
			</sl-card>
		`;
	}

	render() {
		const roleClaim = this.rolesStore.roleClaims
			.get(this.roleClaimHash)
			.entry.get();

		switch (roleClaim.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the role claim')}
					.error=${roleClaim.error}
				></display-error>`;
			case 'completed':
				return this.renderDetail(roleClaim.value);
		}
	}

	static styles = [sharedStyles];
}
