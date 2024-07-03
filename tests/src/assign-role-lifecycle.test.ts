import { toPromise } from '@holochain-open-dev/signals';
import { HashType, retype } from '@holochain-open-dev/utils';
import { dhtSync, runScenario } from '@holochain/tryorama';
import { assert, expect, test } from 'vitest';

import { RolesStore } from '../../ui/src/roles-store.js';
import { setup } from './setup.js';

function createExampleEntryThatOnlyEditorsCanCreate(rolesStore: RolesStore) {
	return rolesStore.client.client.callZome({
		role_name: 'roles_test',
		zome_name: 'example',
		fn_name: 'create_example',
		payload: 'example',
	});
}

test('Assign role lifecycle', async () => {
	await runScenario(async scenario => {
		const { alice, bob } = await setup(scenario);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);
		let roles = await toPromise(alice.store.allRolesWithAssignees);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(alice.store),
		).rejects.toThrowError();

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(
			admins[0].toString(),
			new Uint8Array(alice.player.agentPubKey).toString(),
		);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', [bob.player.agentPubKey]),
		).rejects.toThrowError();
		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
		await alice.store.client.assignRole('editor', [bob.player.agentPubKey]);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		roles = await toPromise(bob.store.allRolesWithAssignees);
		assert.equal(roles.length, 2);
		assert.ok(roles.includes('admin'));
		assert.ok(roles.includes('editor'));

		let editors = await toPromise(bob.store.assignees.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			editors[0].toString(),
			new Uint8Array(bob.player.agentPubKey).toString(),
		);

		let roleClaims =
			await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 1);

		await createExampleEntryThatOnlyEditorsCanCreate(bob.store);

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
			new Uint8Array(bob.player.agentPubKey).toString(),
		);

		// Alice can't unassign bob's role
		await expect(() =>
			alice.store.client.unassignMyRole(
				pendingUnassigments[0].create_link_hash,
			),
		).rejects.toThrowError();
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob will delete their role claim automatically when getting assignees
		editors = await toPromise(bob.store.assignees.get('editor'));
		assert.equal(editors.length, 0);

		roleClaims =
			await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 0);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
	});
});

test('Admin can assign admin that assigns a role', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol } = await setup(scenario);

		let roles = await toPromise(alice.store.allRolesWithAssignees);
		assert.equal(roles.length, 1);
		assert.equal(roles[0], 'admin');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(
			admins[0].toString(),
			new Uint8Array(alice.player.agentPubKey).toString(),
		);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', [bob.player.agentPubKey]),
		).rejects.toThrowError();
		await alice.store.client.assignRole('admin', [bob.player.agentPubKey]);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 2);

		let pendingUnassigments = await toPromise(bob.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 0);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(carol.store),
		).rejects.toThrowError();

		await bob.store.client.assignRole('editor', [carol.player.agentPubKey]);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		pendingUnassigments = await toPromise(carol.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 0);

		let editors = await toPromise(carol.store.assignees.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			editors[0].toString(),
			new Uint8Array(carol.player.agentPubKey).toString(),
		);
		await createExampleEntryThatOnlyEditorsCanCreate(carol.store);
		let roleClaims =
			await carol.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 1);

		await bob.store.client.requestUnassignRole(
			'editor',
			carol.player.agentPubKey,
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		pendingUnassigments = await toPromise(carol.store.pendingUnassigments);
		assert.equal(pendingUnassigments.length, 1);
		assert.equal(
			retype(pendingUnassigments[0].target, HashType.AGENT).toString(),
			new Uint8Array(carol.player.agentPubKey).toString(),
		);

		// Bob can't unassign Carol's role
		await expect(() =>
			bob.store.client.unassignMyRole(pendingUnassigments[0].create_link_hash),
		).rejects.toThrowError();

		// Carol will delete their role claim automatically when getting assignees
		editors = await toPromise(carol.store.assignees.get('editor'));
		assert.equal(editors.length, 0);

		roleClaims =
			await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 0);
		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(carol.store),
		).rejects.toThrowError();
	});
});
