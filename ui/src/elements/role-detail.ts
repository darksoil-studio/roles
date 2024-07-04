import { sharedStyles } from '@holochain-open-dev/elements';
import { notifyError, wrapPathInSvg } from '@holochain-open-dev/elements';
import {
	ProfilesStore,
	profilesStoreContext,
} from '@holochain-open-dev/profiles';
import '@holochain-open-dev/profiles/dist/elements/profile-list-item.js';
import { SearchAgents } from '@holochain-open-dev/profiles/dist/elements/search-agents.js';
import '@holochain-open-dev/profiles/dist/elements/search-agents.js';
import { SignalWatcher } from '@holochain-open-dev/signals';
import { HashType, retype } from '@holochain-open-dev/utils';
import { AgentPubKey, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { msg, str } from '@lit/localize';
import { mdiDelete, mdiInformationOutline } from '@mdi/js';
import { SlDialog } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { rolesStoreContext } from '../context.js';
import { RoleConfig, adminRoleConfig } from '../role-config.js';
import { RolesStore } from '../roles-store.js';

@customElement('role-detail')
export class RoleDetail extends SignalWatcher(LitElement) {
	@property()
	role!: string;

	@consume({ context: rolesStoreContext, subscribe: true })
	@property()
	rolesStore!: RolesStore;

	/**
	 * @internal
	 */
	@consume({ context: profilesStoreContext, subscribe: true })
	profilesStore!: ProfilesStore;

	@state()
	committing = false;

	@state()
	removingRole = false;

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

	async removeRole(role: string, assignee: AgentPubKey) {
		try {
			this.removingRole = true;
			await this.rolesStore.client.requestUnassignRole(role, assignee);

			this.dispatchEvent(
				new CustomEvent('unassig-role-requested', {
					composed: true,
					bubbles: true,
					detail: {
						role,
						assignee,
					},
				}),
			);

			(
				this.shadowRoot!.getElementById(
					`remove-role-${role}-for-${encodeHashToBase64(assignee)}`,
				) as SlDialog
			).hide();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error removing the role'));
		}
		this.removingRole = false;
	}

	name(agent: AgentPubKey): string | undefined {
		const profile = this.profilesStore.profiles.get(agent).get();
		if (profile.status !== 'completed') return undefined;
		return profile.value?.entry.nickname;
	}

	renderRemoveRoleAction(
		roleConfig: RoleConfig,
		assignee: AgentPubKey,
		assigneesCount: number,
	) {
		const pendingUnassignments = this.rolesStore.pendingUnassignments.get();
		switch (pendingUnassignments.status) {
			case 'pending':
				return html`<sl-skeleton></sl-skeleton>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the pending unassignments')}
					tooltip
					.error=${pendingUnassignments.error}
				></display-error>`;
			case 'completed':
				const pendingUnassignment = !!pendingUnassignments.value.find(
					link =>
						retype(link.target, HashType.AGENT).toString() ===
							assignee.toString() &&
						new TextDecoder().decode(link.tag) === roleConfig.role,
				);
				if (pendingUnassignment) {
					return html`<sl-tag>${msg('Remove Role Requested')}</sl-tag>`;
				}

				return html`
					<sl-dialog
						.label=${msg(`Remove role`)}
						id="remove-role-${roleConfig.role}-for-${encodeHashToBase64(
							assignee,
						)}"
					>
						<div class="column" style="gap: 12px">
							<span
								>${msg(
									str`Are you sure you want to request ${this.name(assignee)} to remove its ${roleConfig.singular_name} role?`,
								)}</span
							>
							<span
								>${msg(
									'Their role will actually be removed the next time this member is online again.',
								)}</span
							>
						</div>
						<sl-button
							slot="footer"
							@click=${() =>
								(
									this.shadowRoot!.getElementById(
										`remove-role-${roleConfig.role}-for-${encodeHashToBase64(assignee)}`,
									) as SlDialog
								).hide()}
							>${msg('Cancel')}</sl-button
						>
						<sl-button
							slot="footer"
							variant="primary"
							.loading=${this.committing}
							@click=${() => {
								this.removeRole(roleConfig.role, assignee);
							}}
							>${msg('Remove Role')}</sl-button
						>
					</sl-dialog>

					<sl-icon-button
						.src=${wrapPathInSvg(mdiDelete)}
						.disabled=${roleConfig.role === adminRoleConfig.role &&
						assigneesCount < 2}
						@click=${() => {
							(
								this.shadowRoot?.getElementById(
									`remove-role-${roleConfig.role}-for-${encodeHashToBase64(assignee)}`,
								) as SlDialog
							).show();
						}}
					></sl-icon-button>
				`;
		}
	}

	renderRole(
		roleConfig: RoleConfig,
		assignees: AgentPubKey[],
		iAmAdmin: boolean,
	) {
		return html` <sl-dialog
				id="add-members-${roleConfig.role}"
				.label=${msg(str`Add members as ${roleConfig.plural_name}`)}
			>
				<search-agents
					.excludedAgents=${assignees}
					id="search-agents-${roleConfig.role}"
					.fieldLabel=${msg('Search Member')}
					.emptyListPlaceholder=${msg('No members selected yet.')}
					@agents-changed=${() => this.requestUpdate()}
				></search-agents>
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
					.disabled=${!(
						(
							this.shadowRoot?.getElementById(
								`search-agents-${roleConfig.role}`,
							) as SearchAgents
						)?.value.length > 0
					)}
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
					<span class="title" style="flex: 1">${roleConfig.plural_name}</span>
					${iAmAdmin
						? html`
								<sl-button
									@click=${() =>
										(
											this.shadowRoot!.getElementById(
												`add-members-${roleConfig.role}`,
											) as SlDialog
										).show()}
									>${msg('Add Members')}</sl-button
								>
							`
						: html``}
				</div>
				<sl-divider></sl-divider>
				<span class="placeholder">${roleConfig.description}</span>

				<div class="column" style="gap: 12px; margin-top: 24px;">
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
									<div class="row" style="align-items: center;">
										<profile-list-item .agentPubKey=${a}></profile-list-item>
										<span style="flex: 1"></span>
										${iAmAdmin
											? this.renderRemoveRoleAction(
													roleConfig,
													a,
													assignees.length,
												)
											: html``}
									</div>
								`,
							)}
				</div>
			</div>`;
	}

	assigneesForRoleAndIAmAdmin() {
		const assignees = this.rolesStore.assignees.get(this.role).get();
		const myRoles = this.rolesStore.myRoles.get();
		if (assignees.status !== 'completed') return assignees;
		if (myRoles.status !== 'completed') return myRoles;
		const iAmAdmin = myRoles.value.includes(adminRoleConfig.role);
		return {
			status: 'completed' as 'completed',
			value: {
				assignees: assignees.value,
				iAmAdmin,
			},
		};
	}

	render() {
		const assigneesAndIAmAdmin = this.assigneesForRoleAndIAmAdmin();

		switch (assigneesAndIAmAdmin.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the role details.')}
					.error=${assigneesAndIAmAdmin.error}
				></display-error>`;
			case 'completed':
				const config =
					this.role === adminRoleConfig.role
						? adminRoleConfig
						: this.rolesStore.config.roles_config.find(
								r => r.role === this.role,
							)!;

				return this.renderRole(
					config,
					assigneesAndIAmAdmin.value.assignees,
					assigneesAndIAmAdmin.value.iAmAdmin,
				);
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
