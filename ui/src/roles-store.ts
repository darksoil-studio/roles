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
	LazyMap,
	decodeComponent,
	retype,
} from '@holochain-open-dev/utils';

import { RolesClient } from './roles-client.js';
import { queryLiveEntriesSignal } from './signal.js';

export class RolesStore {
	constructor(public client: RolesClient) {}

	/** Role Claim */
	myRoleClaims = new LazyMap((role: string) =>
		queryLiveEntriesSignal(
			this.client,
			() => this.client.queryUndeletedRoleClaimsForRole(role),
			'RoleClaim',
		),
	);

	/** All Roles */

	allRoles = pipe(
		collectionSignal(this.client, () => this.client.getAllRoles(), 'AllRoles'),
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
				),
			() =>
				joinAsync([
					this.pendingUnassigments.get(),
					this.myRoleClaims.get(role).get(),
				]),
			async ([pendingUnassigments, myRoleClaims], assigneesLinks) => {
				let assignees = uniquify(
					assigneesLinks.map(a => retype(a.target, HashType.AGENT)),
				);
				const myPendingUnassigmentsForThisRole = pendingUnassigments.filter(
					pendingUnassigment =>
						retype(pendingUnassigment.target, HashType.AGENT).toString() ===
							this.client.client.myPubKey.toString() &&
						pendingUnassigment.tag.toString() === role,
				);

				const myAssigneeLink = assigneesLinks.find(
					a =>
						retype(a.target, HashType.AGENT).toString() ===
						this.client.client.myPubKey.toString(),
				);

				if (myAssigneeLink && myRoleClaims.length === 0) {
					await this.client.createRoleClaim({
						role,
						assign_role_create_link_hash: myAssigneeLink.create_link_hash,
					});
				}

				if (myPendingUnassigmentsForThisRole.length > 0) {
					for (const link of myPendingUnassigmentsForThisRole) {
						await this.client.unassignMyRole(link.create_link_hash);
					}

					assignees = assignees.filter(
						assignee =>
							assignee.toString() !== this.client.client.myPubKey.toString(),
					);
				}

				return assignees;
			},
		),
	);

	pendingUnassigments = collectionSignal(
		this.client,
		() => this.client.getPendingUnassignments(),
		'PendingUnassigments',
	);
}
