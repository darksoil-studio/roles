import { assert, test } from "vitest";

import { runScenario, dhtSync } from '@holochain/tryorama';
import { ActionHash, SignedActionHashed, Delete, Record } from '@holochain/client';
import { decode } from '@msgpack/msgpack';
import { EntryRecord } from '@holochain-open-dev/utils';
import { cleanNodeDecoding } from '@holochain-open-dev/utils/dist/clean-node-decoding.js';
import { toPromise } from '@holochain-open-dev/signals';

import { RoleClaim } from '../../ui/src/types.js';
import { sampleRoleClaim } from '../../ui/src/mocks.js';
import { setup } from './setup.js';

test('create RoleClaim', async () => {
  await runScenario(async scenario => {
    const { alice, bob } = await setup(scenario);

    // Alice creates a RoleClaim
    const roleClaim: EntryRecord<RoleClaim> = await alice.store.client.createRoleClaim(await sampleRoleClaim(alice.store.client));
    assert.ok(roleClaim);
  });
});

test('create and read RoleClaim', async () => {
  await runScenario(async scenario => {
    const { alice, bob } = await setup(scenario);

    const sample = await sampleRoleClaim(alice.store.client);

    // Alice creates a RoleClaim
    const roleClaim: EntryRecord<RoleClaim> = await alice.store.client.createRoleClaim(sample);
    assert.ok(roleClaim);

    // Wait for the created entry to be propagated to the other node.
    await dhtSync(
      [alice.player, bob.player],
      alice.player.cells[0].cell_id[0]
    );

    // Bob gets the created RoleClaim
    const createReadOutput: EntryRecord<RoleClaim> = await toPromise(bob.store.roleClaims.get(roleClaim.actionHash).entry);
    assert.deepEqual(sample, cleanNodeDecoding(createReadOutput.entry));
  });
});


test('create and delete RoleClaim', async () => {
  await runScenario(async scenario => {
    const { alice, bob } = await setup(scenario);

    // Alice creates a RoleClaim
    const roleClaim: EntryRecord<RoleClaim> = await alice.store.client.createRoleClaim(await sampleRoleClaim(alice.store.client));
    assert.ok(roleClaim);
        
    // Alice deletes the RoleClaim
    const deleteActionHash = await alice.store.client.deleteRoleClaim(roleClaim.actionHash);
    assert.ok(deleteActionHash);

    // Wait for the created entry to be propagated to the other node.
    await dhtSync(
      [alice.player, bob.player],
      alice.player.cells[0].cell_id[0]
    );
        
    // Bob tries to get the deleted RoleClaim
    const deletes: Array<SignedActionHashed<Delete>> = await toPromise(bob.store.roleClaims.get(roleClaim.actionHash).deletes);
    assert.equal(deletes.length, 1);
  });
});
