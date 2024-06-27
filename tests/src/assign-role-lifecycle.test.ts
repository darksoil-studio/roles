import { toPromise } from '@holochain-open-dev/signals';
import { EntryRecord, HashType, retype } from '@holochain-open-dev/utils';
import { cleanNodeDecoding } from '@holochain-open-dev/utils/dist/clean-node-decoding.js';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { assert, expect, test } from 'vitest';

import { setup } from './setup.js';

test.only('Assign role lifecycle', async () => {
	await runScenario(async scenario => {
		const { alice, bob } = await setup(scenario);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);
		let roles = await toPromise(alice.store.allRoles);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(
			cleanNodeDecoding(admins[0]).toString(),
			new Uint8Array(alice.player.agentPubKey).toString(),
		);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', bob.player.agentPubKey),
		).rejects.toThrowError();
		await alice.store.client.assignRole('editor', bob.player.agentPubKey);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		roles = await toPromise(bob.store.allRoles);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		let editors = await toPromise(bob.store.assignees.get('editors'));
		assert.equal(editors.length, 1);
		assert.equal(
			cleanNodeDecoding(editors[0]).toString(),
			bob.player.agentPubKey.toString(),
		);

		// Bob can't request unassigment of a role to itself
		await expect(() =>
			bob.store.client.requestUnassignRole('editor', bob.player.agentPubKey),
		).rejects.toThrowError();

		let pendingUnassigments = await toPromise(bob.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 0);

		await alice.store.client.requestUnassignRole(
			'editor',
			bob.player.agentPubKey,
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		pendingUnassigments = await toPromise(bob.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 1);
		assert.equal(
			retype(pendingUnassigments[0].target, HashType.AGENT).toString(),
			bob.player.agentPubKey.toString(),
		);

		// Alice can't unassign bob's role
		await expect(() =>
			alice.store.client.unassignMyRole(
				pendingUnassigments[0].create_link_hash,
			),
		).rejects.toThrowError();
		await bob.store.client.unassignMyRole(
			pendingUnassigments[0].create_link_hash,
		);
		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);
		editors = await toPromise(bob.store.assignees.get('editors'));
		assert.equal(editors.length, 0);
	});
});

test('Admin can assign admin that assigns a role', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol } = await setup(scenario);

		let roles = await toPromise(alice.store.allRoles);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(cleanNodeDecoding(admins[0]), alice.player.agentPubKey);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', bob.player.agentPubKey),
		).rejects.toThrowError();
		await alice.store.client.assignRole('admin', bob.player.agentPubKey);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 2);

		let pendingUnassigments = await toPromise(bob.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 0);

		await bob.store.client.assignRole('editor', carol.player.agentPubKey);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		pendingUnassigments = await toPromise(carol.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 1);
		assert.equal(
			retype(pendingUnassigments[0].target, HashType.AGENT).toString(),
			carol.player.agentPubKey.toString(),
		);

		const editors = await toPromise(carol.store.assignees.get('editor'));
		assert.equal(editors.length, 0);
		assert.equal(
			cleanNodeDecoding(editors[0]).toString(),
			carol.player.agentPubKey.toString(),
		);
	});
});
