import {
	hashProperty,
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@holochain-open-dev/elements';
import '@holochain-open-dev/elements/dist/elements/display-error.js';
import { SearchAgents } from '@holochain-open-dev/profiles/dist/elements/search-agents.js';
import { AsyncResult, SignalWatcher } from '@holochain-open-dev/signals';
import { ActionHash, AgentPubKey, EntryHash, Record } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiDelete, mdiInformationOutline } from '@mdi/js';
import { SlDialog } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RoleConfig, RolesStore } from '../roles-store.js';
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

	@state()
	committing = false;

	async addMembersToRole(role: string, assignees: AgentPubKey[]) {
		try {
			this.committing = true;
			await this.rolesStore.client.assignRole(role, assignees);

			this.dispatchEvent(
				new CustomEvent('role-assigned-to-members', {
					composed: true,
					bubbles: true,
					detail: {
						role,
						assignees,
					},
				}),
			);

			(
				this.shadowRoot!.getElementById(`add-members-${role}`) as SlDialog
			).hide();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error adding members to the role'));
		}
		this.committing = false;
	}

	renderRole(roleConfig: RoleConfig, assignees: AgentPubKey[]) {
		return html` <sl-dialog id="add-members-${roleConfig.role}">
				<search-agents id="search-agents-${roleConfig.role}"></search-agents>
				<sl-button
					slot="footer"
					@click=${() =>
						(
							this.shadowRoot!.getElementById(
								`add-members-${roleConfig.role}`,
							) as SlDialog
						).hide()}
					>${msg('Cancel')}</sl-button
				>
				<sl-button
					slot="footer"
					variant="primary"
					.loading=${this.committing}
					@click=${() => {
						let agents = (
							this.shadowRoot?.getElementById(
								`search-agents-${roleConfig.role}`,
							) as SearchAgents
						).value;
						this.addMembersToRole(roleConfig.role, agents);
					}}
					>${msg('Add Members')}</sl-button
				>
			</sl-dialog>
			<div class="column">
				<div class="row" style="align-items: center">
					<span class="title" style="flex: 1">${roleConfig.name}</span>
					<sl-button
						@click=${() =>
							(
								this.shadowRoot!.getElementById(
									`add-members-${roleConfig.role}`,
								) as SlDialog
							).show()}
						>${msg('Add Members')}</sl-button
					>
				</div>
				<sl-divider></sl-divider>
				<span class="placeholder">${roleConfig.description}</span>

				<div class="column" style="gap: 8px; margin-top: 8px">
					${assignees.length === 0
						? html`
								<div
									class="column"
									style="gap: 4px; flex: 1; align-items: center; justify-content: center"
								>
									<sl-icon
										style="color: grey; height: 32px; width: 32px;"
										.src=${wrapPathInSvg(mdiInformationOutline)}
									></sl-icon>
									<span class="placeholder"
										>${msg('No members have this role assigned.')}</span
									>
								</div>
							`
						: assignees.map(
								a => html`
									<div class="row" style="align-items: center">
										<profile-list-item .agentPubKey=${a}></profile-list-item>
										<span style="flex: 1"></span>

										<sl-icon-button
											.src=${wrapPathInSvg(mdiDelete)}
										></sl-icon-button>
									</div>
								`,
							)}
				</div>
			</div>`;
	}

	renderRoles(assignees: ReadonlyMap<string, AgentPubKey[]>) {
		return html`
			<div class="column" style="gap: 24px; flex: 1">
				${this.renderRole(
					{
						role: 'admin',
						name: msg('Administrators'),
						description: msg(
							'Administrators can add and remove assignees for any other role.',
						),
					},
					assignees.get('admin')!,
				)}
				${this.rolesStore.config.roles_config.map(config =>
					this.renderRole(config, assignees.get(config.name)!),
				)}
			</div>
		`;
	}

	assigneesByRole(): AsyncResult<ReadonlyMap<string, AgentPubKey[]>> {
		return joinAsyncMap(
			mapValues(slice(this.rolesStore.assignees, this.rolesStore.allRoles), r =>
				r.get(),
			),
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

	static styles = [
		sharedStyles,
		css`
			sl-divider {
				--spacing: var(--sl-spacing-small);
			}
		`,
	];
}
