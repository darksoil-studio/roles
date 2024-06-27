import {
	collectionSignal,
	fromPromise,
	liveLinksSignal,
	pipe,
} from '@holochain-open-dev/signals';
import { HashType, LazyMap, retype } from '@holochain-open-dev/utils';

import { RolesClient } from './roles-client.js';

export class RolesStore {
	constructor(public client: RolesClient) {}

	/** Role Claim */

	// roleClaims = new LazyHoloHashMap((roleClaimHash: ActionHash) => ({
	// 	entry: immutableEntrySignal(() => this.client.getRoleClaim(roleClaimHash)),
	// 	deletes: deletesForEntrySignal(this.client, roleClaimHash, () =>
	// 		this.client.getAllDeletesForRoleClaim(roleClaimHash),
	// 	),
	// }));

	/** All Roles */

	allRoles = pipe(
		collectionSignal(this.client, () => this.client.getAllRoles(), 'AllRoles'),
		allRoles => allRoles.map(l => l.tag.toString()),
	);

	assignees = new LazyMap((role: string) =>
		pipe(
			fromPromise(() => this.client.roleBaseAddress(role)),
			roleBaseAddress =>
				liveLinksSignal(
					this.client,
					roleBaseAddress,
					() => this.client.getAssigneesForRole(role),
					'RoleToAssignee',
				),
			() => this.pendingUnassigments,
			async (pendingUnassigments, assignees) => {
				const myPendingUnassigmentsForThisRole = pendingUnassigments.filter(
					pendingUnassigment =>
						retype(pendingUnassigment.target, HashType.AGENT).toString() ===
							this.client.client.myPubKey.toString() &&
						pendingUnassigment.tag.toString() === role,
				);

				if (myPendingUnassigmentsForThisRole.length > 0) {
					for (const link of myPendingUnassigmentsForThisRole) {
						await this.client.unassignMyRole(link.create_link_hash);
					}

					assignees = assignees.filter(
						assignee =>
							retype(assignee.target, HashType.AGENT).toString() !==
							this.client.client.myPubKey.toString(),
					);
				}

				return assignees.map(a => retype(a.target, HashType.AGENT));
			},
		),
	);

	pendingUnassigments = collectionSignal(
		this.client,
		() => this.client.getPendingUnassigments(),
		'PendingUnassigments',
	);
}
