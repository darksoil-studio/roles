import { hashProperty, sharedStyles } from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import { SignalWatcher } from '@holochain-open-dev/signals';
import { EntryRecord } from '@holochain-open-dev/utils';
import { ActionHash, EntryHash, Record } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RolesStore } from '../roles-store.js';
import { RoleClaim } from '../types.js';

/**
 * @element role-claim-summary
 * @fires role-claim-selected: detail will contain { roleClaimHash }
 */
@localized()
@customElement('role-claim-summary')
export class RoleClaimSummary extends SignalWatcher(LitElement) {
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

	renderSummary(entryRecord: EntryRecord<RoleClaim>) {
		return html`
			<div class="column" style="gap: 16px;">
				<div class="column" style="gap: 8px">
					<span><strong>${msg('Role Name')}</strong></span>
					<span style="white-space: pre-line">${entryRecord.entry.role}</span>
				</div>
			</div>
		`;
	}

	renderRoleClaim() {
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
				return this.renderSummary(roleClaim.value);
		}
	}

	render() {
		return html`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${() =>
				this.dispatchEvent(
					new CustomEvent('role-claim-selected', {
						composed: true,
						bubbles: true,
						detail: {
							roleClaimHash: this.roleClaimHash,
						},
					}),
				)}
		>
			${this.renderRoleClaim()}
		</sl-card>`;
	}

	static styles = [sharedStyles];
}
