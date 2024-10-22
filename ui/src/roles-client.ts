import { NotificationsClient } from '@darksoil-studio/notifications';
import {
	EntryRecord,
	ZomeClient,
	utf32Decode,
} from '@holochain-open-dev/utils';
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
	encodeHashToBase64,
} from '@holochain/client';

import { RolesNotification } from './notifications.js';
import { RoleClaim } from './types.js';
import { RolesSignal } from './types.js';

export class RolesClient extends ZomeClient<RolesSignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'roles',
		public notificationsClient?: NotificationsClient,
	) {
		super(client, roleName, zomeName);
	}
	/** Role Claim */

	async createRoleClaim(roleClaim: RoleClaim): Promise<void> {
		await this.callZome('create_role_claim', roleClaim);
	}

	async getRoleClaim(
		roleClaimHash: ActionHash,
	): Promise<EntryRecord<RoleClaim> | undefined> {
		const record: Record = await this.callZome('get_role_claim', roleClaimHash);
		return record ? new EntryRecord(record) : undefined;
	}

	getAllDeletesForRoleClaim(
		originalRoleClaimHash: ActionHash,
	): Promise<Array<SignedActionHashed<Delete>> | undefined> {
		return this.callZome(
			'get_all_deletes_for_role_claim',
			originalRoleClaimHash,
		);
	}

	async queryUndeletedRoleClaimsForRole(
		role: string,
	): Promise<Array<EntryRecord<RoleClaim>>> {
		const records: Record[] = await this.callZome(
			'query_undeleted_role_claims_for_role',
			role,
		);
		return (records ? records : []).map(r => new EntryRecord(r));
	}

	/** All Roles */

	async roleBaseAddress(role: string): Promise<EntryHash> {
		return this.callZome('role_base_address', role);
	}

	/** Assignees */

	async getAssigneesForRole(role: string): Promise<Array<Link>> {
		return this.callZome('get_assignees_for_role', role);
	}

	async assignRole(role: string, assignees: AgentPubKey[]): Promise<void> {
		return this.callZome('assign_role', {
			role,
			assignees,
		});
	}

	async requestUnassignRole(
		role: string,
		assignee: AgentPubKey,
	): Promise<void> {
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

	async getPendingUnassignments(): Promise<Array<Link>> {
		return this.callZome('get_pending_unassignments', undefined);
	}

	/** Notifications */
	async sendNotification(
		recipientProfileHash: ActionHash,
		notification: RolesNotification,
	) {
		if (this.notificationsClient) {
			return this.notificationsClient.sendNotification(
				recipientProfileHash,
				this.zomeName,
				notification.type,
				`${encodeHashToBase64(recipientProfileHash)}-${notification.role}`,
				notification,
			);
		}
	}
}
