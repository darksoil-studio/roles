import {
	AsyncComputed,
	collectionSignal,
	fromPromise,
	joinAsync,
	liveLinksSignal,
	pipe,
	uniquify,
} from '@holochain-open-dev/signals';
import { LazyHoloHashMap, LazyMap } from '@holochain-open-dev/utils';
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
	constructor(
		public client: RolesClient,
		public config: RolesStoreConfig,
	) {}

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

				// const myPendingUnassignmentsForThisRole =
				// 	pendingUnassignments.value.filter(
				// 		pendingUnassignment =>
				// 			encodeHashToBase64(pendingUnassignment.target) ===
				// 				encodeHashToBase64(this.client.client.myPubKey) &&
				// 			(decode(pendingUnassignment.tag) as PendingUnassignmentLinkTag)
				// 				.role === role,
				// 	);
				// if (myPendingUnassignmentsForThisRole.length > 0) {
				// 	assigneesProfilesHashes = assigneesProfilesHashes.filter(
				// 		a =>
				// 			encodeHashToBase64(a) !==
				// 			encodeHashToBase64(this.client.client.myPubKey), //NOOOO
				// 	);
				// }

				return {
					status: 'completed',
					value: assigneesLinks.value,
				};
			}),
	);

	rolesForProfile = new LazyHoloHashMap(
		(profileHash: ActionHash) =>
			new AsyncComputed(() => {
				const assigneesByRoles = joinAsyncMap(
					mapValues(slice(this.assignees, this.allRoles), r => r.get()),
				);
				if (assigneesByRoles.status !== 'completed') return assigneesByRoles;

				const assigneeRoles: string[] = [];

				for (const [role, assigneesLinks] of Array.from(
					assigneesByRoles.value.entries(),
				)) {
					if (
						assigneesLinks.find(
							a =>
								encodeHashToBase64(profileHash) ===
								encodeHashToBase64(a.target),
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
		// const myRoles = this.rolesForProfile.get(this.client.client.myPubKey).get();
		// if (myRoles.status !== 'completed') return myRoles;

		const myRoleClaims = joinAsync(
			this.allRoles.map(role => this.myRoleClaims.get(role).get()),
		);
		if (myRoleClaims.status !== 'completed') return myRoleClaims;

		const myClaimedRoles = myRoleClaims.value
			.filter((claims, i) => claims.length > 0)
			.map(claims => claims[0].entry.role);

		return {
			status: 'completed',
			value: myClaimedRoles,
		};
	});
}
