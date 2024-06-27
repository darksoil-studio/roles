import { EntryRecord, ZomeClient } from '@holochain-open-dev/utils';
import {
	ActionHash,
	AgentPubKey,
	AppClient,
	CreateLink,
	Delete,
	DeleteLink,
	EntryHash,
	Link,
	Record,
	SignedActionHashed,
} from '@holochain/client';

import { RoleClaim } from './types.js';
import { RolesSignal } from './types.js';

export class RolesClient extends ZomeClient<RolesSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'roles',
	) {
		super(client, roleName, zomeName);
	}
	/** Role Claim */

	async createRoleClaim(roleClaim: RoleClaim): Promise<EntryRecord<RoleClaim>> {
		const record: Record = await this.callZome('create_role_claim', roleClaim);
		return new EntryRecord(record);
	}

	async getRoleClaim(
		roleClaimHash: ActionHash,
	): Promise<EntryRecord<RoleClaim> | undefined> {
		const record: Record = await this.callZome('get_role_claim', roleClaimHash);
		return record ? new EntryRecord(record) : undefined;
	}

	getAllDeletesForRoleClaim(
		originalRoleClaimHash: ActionHash,
	): Promise<Array<SignedActionHashed<Delete>>> {
		return this.callZome(
			'get_all_deletes_for_role_claim',
			originalRoleClaimHash,
		);
	}

	/** All Roles */

	async getAllRoles(): Promise<Array<Link>> {
		return this.callZome('get_all_roles', undefined);
	}

	async roleBaseAddress(role: string): Promise<EntryHash> {
		return this.callZome('role_base_address', role);
	}

	/** Assignees */

	async getAssigneesForRole(role: string): Promise<Array<Link>> {
		return this.callZome('get_assignees_for_role', role);
	}

	async assignRole(role: string, assignee: AgentPubKey): Promise<void> {
		return this.callZome('assign_role', {
			role,
			assignee,
		});
	}

	async requestUnassignRole(
		role: string,
		assignee: AgentPubKey,
	): Promise<ActionHash> {
		await this.callZome('request_unassign_role', {
			role,
			assignee,
		});
	}

	async unassignMyRole(
		pendingUnassigmentCreateLinkHash: ActionHash,
	): Promise<void> {
		return this.callZome('unassign_my_role', pendingUnassigmentCreateLinkHash);
	}

	/** Pending Unassigments */

	async getPendingUnassigments(): Promise<Array<Link>> {
		return this.callZome('get_pending_unassigments', undefined);
	}
}
