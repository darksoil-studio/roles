import { toPromise } from '@holochain-open-dev/signals';
import { HashType, retype } from '@holochain-open-dev/utils';
import { encodeHashToBase64 } from '@holochain/client';
import { dhtSync, pause, runScenario } from '@holochain/tryorama';
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

		const aliceProfile = await alice.profilesStore.client.createProfile({
			nickname: 'alice',
			fields: {},
		});

		const bobProfile = await bob.profilesStore.client.createProfile({
			nickname: 'bob',
			fields: {},
		});

		let roles = alice.store.allRoles;
		assert.equal(roles.length, 2);
		assert.equal(roles[0], 'admin');
		assert.equal(roles[1], 'editor');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(alice.store),
		).rejects.toThrowError();

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assignees.get('admin'))).length === 1,
			10000,
		);

		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(
			encodeHashToBase64(admins[0].target),
			encodeHashToBase64(aliceProfile.actionHash),
		);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', [bobProfile.actionHash]),
		).rejects.toThrowError();
		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
		const [assignRoleCreateLinkHash] = await alice.store.client.assignRole(
			'editor',
			[bobProfile.actionHash],
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assignees.get('editor'))).length === 1,
			10_000,
		);

		let editors = await toPromise(bob.store.assignees.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			encodeHashToBase64(editors[0].target),
			encodeHashToBase64(bobProfile.actionHash),
		);

		await waitUntil(
			async () =>
				(await bob.store.client.queryUndeletedRoleClaimsForRole('editor'))
					.length === 1,
			40_000,
		);

		let roleClaims =
			await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 1);

		await createExampleEntryThatOnlyEditorsCanCreate(bob.store);

		// Bob can't request unassigment of a role to itself
		await expect(() =>
			bob.store.client.requestUnassignRole(
				'editor',
				bobProfile.actionHash,
				assignRoleCreateLinkHash,
			),
		).rejects.toThrowError();

		let pendingUnassigments = await toPromise(bob.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await alice.store.client.requestUnassignRole(
			'editor',
			bobProfile.actionHash,
			assignRoleCreateLinkHash,
		);
		await pause(100);
		pendingUnassigments = await toPromise(alice.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 1);

		// Alice can't unassign Bob's role
		// await expect(() =>
		// 	alice.store.client.unassignMyRole(
		// 		pendingUnassigments[0].create_link_hash,
		// 	),
		// ).rejects.toThrowError();

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assignees.get('editor'))).length === 0,
			40_000,
		);

		editors = await toPromise(bob.store.assignees.get('editor'));
		assert.equal(editors.length, 0);

		await waitUntil(async () => {
			const roleClaims =
				await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
			return roleClaims.length === 0;
		}, 20_000);

		roleClaims =
			await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 0);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(bob.store),
		).rejects.toThrowError();
	});
});

async function waitUntil(condition: () => Promise<boolean>, timeout: number) {
	const start = Date.now();
	const isDone = await condition();
	if (isDone) return;
	if (timeout <= 0) throw new Error('timeout');
	await pause(1000);
	return waitUntil(condition, timeout - (Date.now() - start));
}

test('Admin can assign admin that assigns a role', async () => {
	await runScenario(async scenario => {
		const { alice, bob, carol } = await setup(scenario);
		const aliceProfile = await alice.profilesStore.client.createProfile({
			nickname: 'alice',
			fields: {},
		});

		const bobProfile = await bob.profilesStore.client.createProfile({
			nickname: 'bob',
			fields: {},
		});

		const carolProfile = await carol.profilesStore.client.createProfile({
			nickname: 'carol',
			fields: {},
		});
		let roles = alice.store.allRoles;
		assert.equal(roles.length, 2);
		assert.equal(roles[0], 'admin');
		assert.equal(roles[1], 'editor');

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assignees.get('admin'))).length === 1,
			30_000,
		);

		let admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 1);
		assert.equal(
			encodeHashToBase64(admins[0].target),
			encodeHashToBase64(aliceProfile.actionHash),
		);

		// Bob can't assign a role to itself
		await expect(() =>
			bob.store.client.assignRole('editor', [bobProfile.actionHash]),
		).rejects.toThrowError();
		const [bobAssignRoleCreateLinkHash] = await alice.store.client.assignRole(
			'admin',
			[bobProfile.actionHash],
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		await waitUntil(
			async () =>
				(await toPromise(bob.store.assignees.get('admin'))).length === 2,
			30_000,
		);

		admins = await toPromise(bob.store.assignees.get('admin'));
		assert.equal(admins.length, 2);

		let pendingUnassigments = await toPromise(bob.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(carol.store),
		).rejects.toThrowError();

		const [carolAssignRoleCreateLinkHash] = await bob.store.client.assignRole(
			'editor',
			[carolProfile.actionHash],
		);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync(
			[alice.player, bob.player, carol.player],
			alice.player.cells[0].cell_id[0],
		);

		pendingUnassigments = await toPromise(carol.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 0);

		await waitUntil(
			async () =>
				(await carol.store.client.queryUndeletedRoleClaimsForRole('editor'))
					.length === 1,
			20_000,
		);

		let editors = await toPromise(carol.store.assignees.get('editor'));
		assert.equal(editors.length, 1);
		assert.equal(
			encodeHashToBase64(editors[0].target),
			encodeHashToBase64(carolProfile.actionHash),
		);
		await createExampleEntryThatOnlyEditorsCanCreate(carol.store);
		let roleClaims =
			await carol.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 1);

		await bob.store.client.requestUnassignRole(
			'editor',
			carolProfile.actionHash,
			carolAssignRoleCreateLinkHash,
		);
		await pause(100);
		pendingUnassigments = await toPromise(bob.store.pendingUnassignments);
		assert.equal(pendingUnassigments.length, 1);

		// Bob can't unassign Carol's role
		// await expect(() =>
		// 	bob.store.client.unassignMyRole(pendingUnassigments[0].create_link_hash),
		// ).rejects.toThrowError();

		await waitUntil(
			async () =>
				(await toPromise(carol.store.assignees.get('editor'))).length === 0,
			10_000,
		);

		// Carol will filter out their role claim automatically when getting assignees
		editors = await toPromise(carol.store.assignees.get('editor'));
		assert.equal(editors.length, 0);

		await waitUntil(async () => {
			const roleClaims =
				await carol.store.client.queryUndeletedRoleClaimsForRole('editor');
			return roleClaims.length === 0;
		}, 30_000);

		roleClaims =
			await bob.store.client.queryUndeletedRoleClaimsForRole('editor');
		assert.equal(roleClaims.length, 0);
		await expect(() =>
			createExampleEntryThatOnlyEditorsCanCreate(carol.store),
		).rejects.toThrowError();
	});
});
