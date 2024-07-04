import { NotificationsStore } from '@darksoil-studio/notifications';
import { wrapPathInSvg } from '@holochain-open-dev/elements';
import {
	AsyncState,
	collectionSignal,
	fromPromise,
	joinAsync,
	liveLinksSignal,
	pipe,
	uniquify,
	watch,
} from '@holochain-open-dev/signals';
import {
	HashType,
	LazyHoloHashMap,
	LazyMap,
	decodeComponent,
	retype,
} from '@holochain-open-dev/utils';
import { Link, encodeHashToBase64 } from '@holochain/client';
import { msg, str } from '@lit/localize';
import { mdiSmartCard, mdiSmartCardOff } from '@mdi/js';
import { decode, encode } from '@msgpack/msgpack';

import { NOTIFICATIONS_TYPES } from './notifications.js';
import { RoleConfig, adminRoleConfig } from './role-config.js';
import { RolesClient } from './roles-client.js';
import {
	joinAsyncMap,
	mapValues,
	queryLiveEntriesSignal,
	slice,
} from './signal.js';

export interface RolesStoreConfig {
	roles_config: Array<RoleConfig>;
}

export class RolesStore {
	constructor(
		public client: RolesClient,
		public config: RolesStoreConfig,
		public notificationsStore?: NotificationsStore,
	) {
		// Always watch the unassignments to automatically unassign a role whenever
		// we receive a unassign role request
		watch(this.pendingUnassigments, pendingUnassigments => {});

		if (notificationsStore) {
			notificationsStore.addTypes({
				[NOTIFICATIONS_TYPES.ASSIGNED_ROLE]: {
					name: msg('Role assigned'),
					description: msg('An administrator assigned a role to you'),
					title(notificationGroup) {
						return new AsyncState({
							status: 'completed',
							value: '',
						});
					},
					contents(notification) {
						const role: string = (decode(notification.entry.content) as any)
							.role;
						const roleConfig =
							role === adminRoleConfig.role
								? adminRoleConfig
								: config.roles_config.find(
										roleConfig => roleConfig.role === role,
									);

						return new AsyncState({
							status: 'completed',
							value: {
								body: msg(
									str`You were assigned the ${roleConfig?.singular_name} role.`,
								),
								iconSrc: wrapPathInSvg(mdiSmartCard),
							},
						});
					},
					onClick(notificationGroup) {
						// Do nothing
					},
				},
				[NOTIFICATIONS_TYPES.UNASSIGNED_ROLE]: {
					name: msg('Role removed'),
					description: msg('An administrator removed a role from you'),
					title(notificationGroup) {
						return new AsyncState({
							status: 'completed',
							value: '',
						});
					},
					contents(notification) {
						const role: string = (decode(notification.entry.content) as any)
							.role;
						const roleConfig =
							role === adminRoleConfig.role
								? adminRoleConfig
								: config.roles_config.find(
										roleConfig => roleConfig.role === role,
									);

						return new AsyncState({
							status: 'completed',
							value: {
								body: msg(
									str`An administrator removed your ${roleConfig?.singular_name} role.`,
								),
								iconSrc: wrapPathInSvg(mdiSmartCardOff),
							},
						});
					},
					onClick(notificationGroup) {
						// Do nothing
					},
				},
			});
			client.onSignal(async signal => {
				if (
					signal.type === 'LinkCreated' &&
					signal.link_type === 'RoleToAssignee'
				) {
					// We just assigned a role: notify the assignee
					await notificationsStore.client.createNotification({
						content: encode({
							role: new TextDecoder().decode(signal.action.hashed.content.tag),
						}),
						notification_type: NOTIFICATIONS_TYPES.ASSIGNED_ROLE,
						persistent: false,
						notification_group: encodeHashToBase64(signal.action.hashed.hash),
						recipients: [
							retype(
								signal.action.hashed.content.target_address,
								HashType.AGENT,
							),
						],
					});
				}
				if (
					signal.type === 'LinkCreated' &&
					signal.link_type === 'PendingUnassignments'
				) {
					// We just assigned a role: notify the assignee
					await notificationsStore.client.createNotification({
						content: encode({
							role: new TextDecoder().decode(signal.action.hashed.content.tag),
						}),
						notification_type: NOTIFICATIONS_TYPES.UNASSIGNED_ROLE,
						persistent: false,
						notification_group: encodeHashToBase64(signal.action.hashed.hash),
						recipients: [
							retype(
								signal.action.hashed.content.target_address,
								HashType.AGENT,
							),
						],
					});
				}
			});
		}
	}

	/** Role Claim */
	myRoleClaims = new LazyMap((role: string) =>
		queryLiveEntriesSignal(
			this.client,
			() => this.client.queryUndeletedRoleClaimsForRole(role),
			'RoleClaim',
		),
	);

	/** All Roles */

	get allRoles(): string[] {
		return ['admin', ...this.config.roles_config.map(r => r.role)];
	}

	allRolesWithAssignees = pipe(
		collectionSignal(this.client, () => this.client.getAllRoles(), 'RolesPath'),
		allRoles => allRoles.map(l => decodeComponent(l.tag)),
	);

	private roleBasedAddress = new LazyMap((role: string) =>
		fromPromise(() => this.client.roleBaseAddress(role)),
	);

	assignees = new LazyMap((role: string) =>
		pipe(
			this.roleBasedAddress.get(role),
			roleBaseAddress =>
				liveLinksSignal(
					this.client,
					roleBaseAddress,
					() => this.client.getAssigneesForRole(role),
					'RoleToAssignee',
					4000,
				),
			() =>
				joinAsync([
					this.pendingUnassigments.get(),
					this.myRoleClaims.get(role).get(),
				]),
			async ([pendingUnassignments, myRoleClaims], assigneesLinks) => {
				let assignees = uniquify(
					assigneesLinks.map(a => retype(a.target, HashType.AGENT)),
				);

				const myPendingUnassignmentsForThisRole = pendingUnassignments.filter(
					pendingUnassigment =>
						retype(pendingUnassigment.target, HashType.AGENT).toString() ===
							new Uint8Array(this.client.client.myPubKey).toString() &&
						new TextDecoder().decode(pendingUnassigment.tag) === role,
				);

				/** If I am assigned to the role but haven't claimed it, do so */

				const myAssigneeLink = assigneesLinks.find(
					a =>
						retype(a.target, HashType.AGENT).toString() ===
						new Uint8Array(this.client.client.myPubKey).toString(),
				);

				if (
					myPendingUnassignmentsForThisRole.length === 0 &&
					myAssigneeLink &&
					myRoleClaims.length === 0
				) {
					await this.client.createRoleClaim({
						role,
						assign_role_create_link_hash: myAssigneeLink.create_link_hash,
					});
				}

				return assignees;
			},
		),
	);

	rolesForAgent = new LazyHoloHashMap(assignee =>
		pipe(
			this.allRolesWithAssignees,
			roles =>
				joinAsyncMap(mapValues(slice(this.assignees, roles), r => r.get())),
			assigneesByRoles => {
				const assigneeRoles: string[] = [];

				for (const [role, assignees] of Array.from(
					assigneesByRoles.entries(),
				)) {
					if (assignees.find(a => assignee.toString() === a.toString())) {
						assigneeRoles.push(role);
					}
				}

				return assigneeRoles;
			},
		),
	);

	pendingUnassigments = pipe(
		collectionSignal(
			this.client,
			() => this.client.getPendingUnassignments(),
			'PendingUnassignments',
		),
		links =>
			links.map(link => ({
				...link,
				target: retype(link.target, HashType.AGENT),
			})) as Link[],
		async pendingUnassignments => {
			/** If I have been requested to unassign a role and I still have it, unassign it */
			const isUnassignmentLinkForMe = (pendingUnassigment: Link) =>
				retype(pendingUnassigment.target, HashType.AGENT).toString() ===
				new Uint8Array(this.client.client.myPubKey).toString();

			const myPendingUnassignmentsForThisRole = pendingUnassignments.filter(
				isUnassignmentLinkForMe,
			);
			if (myPendingUnassignmentsForThisRole.length > 0) {
				for (const link of myPendingUnassignmentsForThisRole) {
					await this.client.unassignMyRole(link.create_link_hash);
				}

				pendingUnassignments = pendingUnassignments.filter(
					link => !isUnassignmentLinkForMe(link),
				);
			}
			return pendingUnassignments;
		},
	);
}
