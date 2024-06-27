import { toPromise } from '@holochain-open-dev/signals';
import { EntryRecord, HashType, retype } from '@holochain-open-dev/utils';
import { cleanNodeDecoding } from '@holochain-open-dev/utils/dist/clean-node-decoding.js';
import {
	ActionHash,
	Delete,
	Record,
	SignedActionHashed,
} from '@holochain/client';
import { dhtSync, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { assert, expect, test } from 'vitest';

import { sampleRoleClaim } from '../../ui/src/mocks.js';
import { RoleClaim } from '../../ui/src/types.js';
import { setup } from './setup.js';

test('Assign role lifecycle', async () => {
	await runScenario(async scenario => {
		const { alice, bob } = await setup(scenario);

		console.log('heyyy');

		let roles = await toPromise(alice.store.allRoles);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		console.log('heyyy');
		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(cleanNodeDecoding(admins[0]), alice.player.agentPubKey);

		console.log('heyyy');
		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', bob.player.agentPubKey),
		).rejects.toThrowError();
		await alice.store.client.assignRole('editor', bob.player.agentPubKey);
		console.log('heyyy');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		console.log('heyyy');
		roles = await toPromise(bob.store.allRoles);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		console.log('heyyy');
		let editors = await toPromise(bob.store.assignees.get('editors'));
		assert.equal(editors.length, 1);
		assert.equal(
			cleanNodeDecoding(editors[0]).toString(),
			bob.player.agentPubKey.toString(),
		);
		console.log('heyyy');

		// Bob can't request unassigment of a role to itself
		await expect(() =>
			bob.store.client.requestUnassignRole('editor', bob.player.agentPubKey),
		).rejects.toThrowError();

		console.log('heyyy');
		await alice.store.client.requestUnassignRole(
			'editor',
			bob.player.agentPubKey,
		);
		console.log('heyyy');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);
		console.log('heyyy');

		const pendingUnassigments = await toPromise(bob.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 1);
		assert.equal(
			retype(pendingUnassigments[0].target, HashType.AGENT).toString(),
			bob.player.agentPubKey.toString(),
		);

		console.log('heyyy');
		// Alice can't unassign bob's role
		await expect(() =>
			alice.store.client.unassignMyRole(
				pendingUnassigments[0].create_link_hash,
			),
		).rejects.toThrowError();
		console.log('heyyy');
		await bob.store.client.unassignMyRole(
			pendingUnassigments[0].create_link_hash,
		);
		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);
		console.log('heyyy');
		editors = await toPromise(bob.store.assignees.get('editors'));
		assert.equal(editors.length, 0);
	});
});
