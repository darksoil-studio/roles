import { NotificationsStore } from '@darksoil-studio/notifications';
import { wrapPathInSvg } from '@holochain-open-dev/elements/dist/icon.js';
import { ProfilesStore } from '@holochain-open-dev/profiles';
import {
	AsyncComputed,
	AsyncState,
	Signal,
	collectionSignal,
	fromPromise,
	joinAsync,
	liveLinksSignal,
	pipe,
	toPromise,
	uniquify,
} from '@holochain-open-dev/signals';
import {
	HashType,
	HoloHashMap,
	LazyHoloHashMap,
	LazyMap,
	hashEntry,
	retype,
} from '@holochain-open-dev/utils';
import { ActionHash, Link, encodeHashToBase64 } from '@holochain/client';

import { RoleConfig } from './role-config.js';
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
	private _unassigningRoleCreateLinkHash: ActionHash[] = [];

	constructor(
		public client: RolesClient,
		public config: RolesStoreConfig,
		public notificationsStore?: NotificationsStore,
	) {
		// Always watch the unassignments to automatically unassign a role whenever
		// we receive a unassign role request
		effect(async () => {
			const pendingUnassignments = this.pendingUnassignments.get();
			if (pendingUnassignments.status !== 'completed') return;

			const isUnassignmentLinkForMe = (pendingUnassignment: Link) =>
				encodeHashToBase64(
					retype(pendingUnassignment.target, HashType.AGENT),
				) === encodeHashToBase64(this.client.client.myPubKey);

			const myPendingUnassignmentsForThisRole =
				pendingUnassignments.value.filter(link =>
					isUnassignmentLinkForMe(link),
				);

			if (myPendingUnassignmentsForThisRole.length > 0) {
				for (const link of myPendingUnassignmentsForThisRole) {
					if (
						!this._unassigningRoleCreateLinkHash.find(
							linkHash =>
								encodeHashToBase64(linkHash) ===
								encodeHashToBase64(link.create_link_hash),
						)
					) {
						const myRoleClaimsForThisRole = await toPromise(
							this.myRoleClaims.get(new TextDecoder().decode(link.tag)),
						);
						if (myRoleClaimsForThisRole.length === 0) return; // Wait for the RoleClaim to actually be committed by the other effect, then go ahead and unassign the role

						this._unassigningRoleCreateLinkHash.push(link.create_link_hash);
						this.client.unassignMyRole(link.create_link_hash).finally(() => {
							this._unassigningRoleCreateLinkHash =
								this._unassigningRoleCreateLinkHash.filter(
									linkHash =>
										encodeHashToBase64(linkHash) !==
										encodeHashToBase64(link.create_link_hash),
								);
						});
					}
				}
			}
		});

		if (notificationsStore) {
			// notificationsStore.addTypes({
			// 	[NOTIFICATIONS_TYPES.ASSIGNED_ROLE]: {
			// 		name: msg('Role assigned'),
			// 		description: msg('An administrator assigned a role to you'),
			// 		title(notificationGroup) {
			// 			return new AsyncState({
			// 				status: 'completed',
			// 				value: '',
			// 			});
			// 		},
			// 		contents(notification) {
			// 			const role: string = (decode(notification.entry.content) as any)
			// 				.role;
			// 			const roleConfig =
			// 				role === adminRoleConfig.role
			// 					? adminRoleConfig
			// 					: config.roles_config.find(
			// 							roleConfig => roleConfig.role === role,
			// 						);
			// 			return new AsyncState({
			// 				status: 'completed',
			// 				value: {
			// 					body: msg(
			// 						str`You have been assigned the ${roleConfig?.singular_name} role.`,
			// 					),
			// 					iconSrc: wrapPathInSvg(mdiSmartCard),
			// 				},
			// 			});
			// 		},
			// 		onClick(notificationGroup) {
			// 			// Do nothing
			// 		},
			// 	},
			// 	[NOTIFICATIONS_TYPES.UNASSIGNED_ROLE]: {
			// 		name: msg('Role removed'),
			// 		description: msg('An administrator removed a role from you'),
			// 		title(notificationGroup) {
			// 			return new AsyncState({
			// 				status: 'completed',
			// 				value: '',
			// 			});
			// 		},
			// 		contents(notification) {
			// 			const role: string = (decode(notification.entry.content) as any)
			// 				.role;
			// 			const roleConfig =
			// 				role === adminRoleConfig.role
			// 					? adminRoleConfig
			// 					: config.roles_config.find(
			// 							roleConfig => roleConfig.role === role,
			// 						);
			// 			return new AsyncState({
			// 				status: 'completed',
			// 				value: {
			// 					body: msg(
			// 						str`An administrator removed your ${roleConfig?.singular_name} role.`,
			// 					),
			// 					iconSrc: wrapPathInSvg(mdiSmartCardOff),
			// 				},
			// 			});
			// 		},
			// 		onClick(notificationGroup) {
			// 			// Do nothing
			// 		},
			// 	},
			// });
			// if (profilesStore) {
			// 	effect(() => {
			// 		const myRoles = this.rolesForAgent
			// 			.get(this.client.client.myPubKey)
			// 			.get();
			// 		const pendingUnassigments = this.pendingUnassignments.get();
			// 		if (myRoles.status !== 'completed') return ;
			// 		if (!myRoles.value.includes(adminRoleConfig.role)) return;
			// 		if (pendingUnassigments.status !== 'completed')
			// 			return ;
			// 		// I am an admin: watch for new agents for the profiles of each
			// 		for (const role of this.allRoles) {
			// 			const assignees = this.assignees.get(role).get();
			// 			if (assignees.status !== 'completed') continue;
			// 			const allProfileHashes = joinAsync(
			// 				assignees.value.map(agent =>
			// 					profilesStore.agentProfile.get(agent).get(),
			// 				),
			// 			);
			// 			if (allProfileHashes.status !== 'completed') continue;
			// 			const uniqueProfilesHashes = uniquify(
			// 				allProfileHashes.value
			// 					.filter(p => p !== undefined)
			// 					.map(p => p.profileHash),
			// 			);
			// 		}
			// 	});
			// }
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

	private roleBaseAddress = new LazyMap((role: string) =>
		fromPromise(() => this.client.roleBaseAddress(role)),
	);

	private roleToAssigneeLinks = new LazyMap((role: string) =>
		pipe(this.roleBaseAddress.get(role), roleBaseAddress =>
			liveLinksSignal(
				this.client,
				roleBaseAddress,
				() => this.client.getAssigneesForRole(role),
				'RoleToAssignee',
				4000,
			),
		),
	);

	assignees = new LazyMap(
		(role: string) =>
			new AsyncComputed(() => {
				const assigneesLinks = this.roleToAssigneeLinks.get(role).get();
				const pendingUnassignments = this.pendingUnassignments.get();
				const myRoleClaims = this.myRoleClaims.get(role).get();

				if (assigneesLinks.status !== 'completed') return assigneesLinks;
				if (pendingUnassignments.status !== 'completed')
					return pendingUnassignments;
				if (myRoleClaims.status !== 'completed') return myRoleClaims;

				let assignees = uniquify(
					assigneesLinks.value.map(a => retype(a.target, HashType.AGENT)),
				);

				const myPendingUnassignmentsForThisRole =
					pendingUnassignments.value.filter(
						pendingUnassignment =>
							encodeHashToBase64(
								retype(pendingUnassignment.target, HashType.AGENT),
							) === encodeHashToBase64(this.client.client.myPubKey) &&
							new TextDecoder().decode(pendingUnassignment.tag) === role,
					);
				if (myPendingUnassignmentsForThisRole.length > 0) {
					assignees = assignees.filter(
						a =>
							encodeHashToBase64(a) !==
							encodeHashToBase64(this.client.client.myPubKey),
					);
				}

				return {
					status: 'completed',
					value: assignees,
				};
			}),
	);

	rolesForAgent = new LazyHoloHashMap(
		assignee =>
			new AsyncComputed(() => {
				const assigneesByRoles = joinAsyncMap(
					mapValues(slice(this.assignees, this.allRoles), r => r.get()),
				);
				if (assigneesByRoles.status !== 'completed') return assigneesByRoles;

				const assigneeRoles: string[] = [];

				for (const [role, assignees] of Array.from(
					assigneesByRoles.value.entries(),
				)) {
					if (
						assignees.find(
							a => encodeHashToBase64(assignee) === encodeHashToBase64(a),
						)
					) {
						assigneeRoles.push(role);
					}
				}

				return {
					status: 'completed',
					value: assigneeRoles,
				};
			}),
	);

	pendingUnassignments = collectionSignal(
		this.client,
		() => this.client.getPendingUnassignments(),
		'PendingUnassignments',
		4000,
	);

	myRoles = new AsyncComputed(() => {
		const myRoles = this.rolesForAgent.get(this.client.client.myPubKey).get();
		if (myRoles.status !== 'completed') return myRoles;

		const myRoleClaims = joinAsync(
			myRoles.value.map(role => this.myRoleClaims.get(role).get()),
		);
		if (myRoleClaims.status !== 'completed') return myRoleClaims;

		const myClaimedRoles = myRoles.value.filter(
			(_, i) => myRoleClaims.value[i].length > 0,
		);

		return {
			status: 'completed',
			value: myClaimedRoles,
		};
	});
}

// NOTE: This scheduling logic is too basic to be useful. Do not copy/paste.
// This function would usually live in a library/framework, not application code
let pending = false;

const w = new Signal.subtle.Watcher(() => {
	if (!pending) {
		pending = true;
		queueMicrotask(() => {
			pending = false;
			for (const s of w.getPending()) s.get();
			w.watch();
		});
	}
});

// TODO: why do we need to use this complicated effect method?
// An effect effect Signal which evaluates to cb, which schedules a read of
// itself on the microtask queue whenever one of its dependencies might change
function effect(cb: any) {
	let destructor: any;
	const c = new Signal.Computed(() => {
		if (typeof destructor === 'function') {
			destructor();
		}
		destructor = cb();
	});
	w.watch(c);
	c.get();
	return () => {
		if (typeof destructor === 'function') {
			destructor();
		}
		w.unwatch(c);
	};
}
