import {
	collectionSignal,
	fromPromise,
	joinAsync,
	liveLinksSignal,
	pipe,
	uniquify,
} from '@holochain-open-dev/signals';
import {
	HashType,
	LazyHoloHashMap,
	LazyMap,
	decodeComponent,
	retype,
} from '@holochain-open-dev/utils';
import { Link } from '@holochain/client';

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

				/** If I have been requested to unassign a role and I still have it, unassign it */

				const myPendingUnassignmentsForThisRole = pendingUnassignments.filter(
					pendingUnassigment =>
						retype(pendingUnassigment.target, HashType.AGENT).toString() ===
							new Uint8Array(this.client.client.myPubKey).toString() &&
						new TextDecoder().decode(pendingUnassigment.tag) === role,
				);
				if (myPendingUnassignmentsForThisRole.length > 0) {
					for (const link of myPendingUnassignmentsForThisRole) {
						await this.client.unassignMyRole(link.create_link_hash);
					}

					assignees = assignees.filter(
						assignee =>
							assignee.toString() !==
							new Uint8Array(this.client.client.myPubKey).toString(),
					);
				}

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
		async pendingUnassigments => {
			return pendingUnassigments;
		},
	);
}
