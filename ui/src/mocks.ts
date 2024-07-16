import {
	AgentPubKeyMap,
	HashType,
	HoloHashMap,
	RecordBag,
	ZomeMock,
	decodeEntry,
	entryState,
	fakeCreateAction,
	fakeDeleteEntry,
	fakeEntry,
	fakeRecord,
	fakeUpdateEntry,
	hash,
	pickBy,
} from '@holochain-open-dev/utils';
import {
	ActionHash,
	AgentPubKey,
	AppClient,
	Delete,
	EntryHash,
	Link,
	NewEntryAction,
	Record,
	SignedActionHashed,
	decodeHashFromBase64,
	fakeActionHash,
	fakeAgentPubKey,
	fakeDnaHash,
	fakeEntryHash,
} from '@holochain/client';

import { RolesClient } from './roles-client.js';
import { RoleClaim } from './types.js';

export class RolesZomeMock extends ZomeMock implements AppClient {
	constructor(myPubKey?: AgentPubKey) {
		super('roles_test', 'roles', myPubKey);
	}
	/** Role Claim */
	roleClaims = new HoloHashMap<
		ActionHash,
		{
			deletes: Array<SignedActionHashed<Delete>>;
			revisions: Array<Record>;
		}
	>();

	async create_role_claim(roleClaim: RoleClaim): Promise<Record> {
		const entryHash = hash(roleClaim, HashType.ENTRY);
		const record = await fakeRecord(
			await fakeCreateAction(entryHash),
			fakeEntry(roleClaim),
		);

		this.roleClaims.set(record.signed_action.hashed.hash, {
			deletes: [],
			revisions: [record],
		});

		return record;
	}

	async get_role_claim(roleClaimHash: ActionHash): Promise<Record | undefined> {
		const roleClaim = this.roleClaims.get(roleClaimHash);
		return roleClaim ? roleClaim.revisions[0] : undefined;
	}

	async get_all_deletes_for_role_claim(
		roleClaimHash: ActionHash,
	): Promise<Array<SignedActionHashed<Delete>> | undefined> {
		const roleClaim = this.roleClaims.get(roleClaimHash);
		return roleClaim ? roleClaim.deletes : undefined;
	}

	async get_oldest_delete_for_role_claim(
		roleClaimHash: ActionHash,
	): Promise<SignedActionHashed<Delete> | undefined> {
		const roleClaim = this.roleClaims.get(roleClaimHash);
		return roleClaim ? roleClaim.deletes[0] : undefined;
	}
	async delete_role_claim(
		original_role_claim_hash: ActionHash,
	): Promise<ActionHash> {
		const record = await fakeRecord(
			await fakeDeleteEntry(original_role_claim_hash),
		);

		this.roleClaims
			.get(original_role_claim_hash)
			.deletes.push(record.signed_action as SignedActionHashed<Delete>);

		return record.signed_action.hashed.hash;
	}

	async get_all_roles(): Promise<Array<Link>> {
		const records: Record[] = Array.from(this.roleClaims.values()).map(
			r => r.revisions[r.revisions.length - 1],
		);
		const base = await fakeEntryHash();
		return Promise.all(
			records.map(async record => ({
				base,
				target: record.signed_action.hashed.hash,
				author: record.signed_action.hashed.content.author,
				timestamp: record.signed_action.hashed.content.timestamp,
				zome_index: 0,
				link_type: 0,
				tag: new Uint8Array(),
				create_link_hash: await fakeActionHash(),
			})),
		);
	}
}

export async function sampleRoleClaim(
	client: RolesClient,
	partialRoleClaim: Partial<RoleClaim> = {},
): Promise<RoleClaim> {
	return {
		...{
			role: 'Lorem ipsum 2',
			assign_role_create_link_hash: await fakeActionHash(),
		},
		...partialRoleClaim,
	};
}
