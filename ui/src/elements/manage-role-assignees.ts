import { sharedStyles } from '@holochain-open-dev/elements';
import { notifyError, wrapPathInSvg } from '@holochain-open-dev/elements';
import {
	ProfilesStore,
	profilesStoreContext,
} from '@holochain-open-dev/profiles';
import '@holochain-open-dev/profiles/dist/elements/profile-list-item.js';
import '@holochain-open-dev/profiles/dist/elements/search-profiles.js';
import { SearchProfiles } from '@holochain-open-dev/profiles/dist/elements/search-profiles.js';
import { SignalWatcher, toPromise } from '@holochain-open-dev/signals';
import { HashType, retype } from '@holochain-open-dev/utils';
import {
	ActionHash,
	AgentPubKey,
	Link,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { msg, str } from '@lit/localize';
import { mdiDelete, mdiInformationOutline } from '@mdi/js';
import { decode } from '@msgpack/msgpack';
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
import { PendingUnassignmentLinkTag } from '../types.js';

@customElement('manage-role-assignees')
export class ManageRoleAssignees extends SignalWatcher(LitElement) {
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

	async allAgentsForProfiles(
		profilesHashes: ActionHash[],
	): Promise<Array<AgentPubKey>> {
		const allAgentsNested = await Promise.all(
			profilesHashes.map(profileHash =>
				toPromise(this.profilesStore.agentsForProfile.get(profileHash)),
			),
		);

		return ([] as AgentPubKey[]).concat(...allAgentsNested);
	}

	async addMembersToRole(role: string, profilesHashes: ActionHash[]) {
		try {
			this.committing = true;
			const assignees = await this.allAgentsForProfiles(profilesHashes);
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

	async removeRole(
		role: string,
		assignee: AgentPubKey,
		assignRoleCreateLinkHash: ActionHash,
	) {
		try {
			this.removingRole = true;
			await this.rolesStore.client.requestUnassignRole(
				role,
				assignee,
				assignRoleCreateLinkHash,
			);

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

	name(profileHash: ActionHash): string | undefined {
		const profile = this.profilesStore.profiles
			.get(profileHash)
			.latestVersion.get();
		if (profile.status !== 'completed') return undefined;
		return profile.value?.entry.nickname;
	}

	renderRemoveRoleAction(
		roleConfig: RoleConfig,
		assigneeLink: Link,
		assigneesCount: number,
	) {
		const assigneeProfileHash = assigneeLink.target;
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
						encodeHashToBase64(link.target) ===
							encodeHashToBase64(assigneeProfileHash) &&
						(decode(link.tag) as PendingUnassignmentLinkTag).role ===
							roleConfig.role,
				);
				if (pendingUnassignment) {
					return html`<sl-tag>${msg('Remove Role Requested')}</sl-tag>`;
				}

				return html`
					<sl-dialog
						.label=${msg(`Remove role`)}
						id="remove-role-${roleConfig.role}-for-${encodeHashToBase64(
							assigneeProfileHash,
						)}"
					>
						<div class="column" style="gap: 12px">
							<span
								>${msg(
									str`Are you sure you want to request ${this.name(assigneeProfileHash)} to remove its ${roleConfig.singular_name} role?`,
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
										`remove-role-${roleConfig.role}-for-${encodeHashToBase64(assigneeProfileHash)}`,
									) as SlDialog
								).hide()}
							>${msg('Cancel')}</sl-button
						>
						<sl-button
							slot="footer"
							variant="primary"
							.loading=${this.committing}
							@click=${() => {
								this.removeRole(
									roleConfig.role,
									assigneeProfileHash,
									assigneeLink.create_link_hash,
								);
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
									`remove-role-${roleConfig.role}-for-${encodeHashToBase64(assigneeProfileHash)}`,
								) as SlDialog
							).show();
						}}
					></sl-icon-button>
				`;
		}
	}

	renderRole(
		roleConfig: RoleConfig,
		assigneesLinks: Link[],
		iAmAdmin: boolean,
	) {
		const assigneesProfilesHashes = assigneesLinks.map(l => l.target);
		return html` <sl-dialog
				id="add-members-${roleConfig.role}"
				.label=${msg(str`Add members as ${roleConfig.plural_name}`)}
			>
				<search-profiles
					.excludedProfiles=${assigneesProfilesHashes}
					id="search-profiles-${roleConfig.role}"
					.fieldLabel=${msg('Search Member')}
					.emptyListPlaceholder=${msg('No members selected yet.')}
					@profiles-changed=${() => this.requestUpdate()}
				></search-profiles>
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
								`search-profiles-${roleConfig.role}`,
							) as SearchProfiles
						)?.value.length > 0
					)}
					.loading=${this.committing}
					@click=${() => {
						const profilesHashes = (
							this.shadowRoot?.getElementById(
								`search-profiles-${roleConfig.role}`,
							) as SearchProfiles
						).value;
						this.addMembersToRole(roleConfig.role, profilesHashes);
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
					${assigneesProfilesHashes.length === 0
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
						: assigneesLinks.map(
								link => html`
									<div class="row" style="align-items: center;">
										<profile-list-item
											.profileHash=${link.target}
										></profile-list-item>
										<span style="flex: 1"></span>
										${iAmAdmin
											? this.renderRemoveRoleAction(
													roleConfig,
													link,
													assigneesProfilesHashes.length,
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
			status: 'completed' as const,
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
