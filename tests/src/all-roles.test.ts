import { assert, test } from "vitest";

import { runScenario, dhtSync } from '@holochain/tryorama';
import { ActionHash, Record, EntryHash } from '@holochain/client';
import { decode } from '@msgpack/msgpack';
import { EntryRecord } from '@holochain-open-dev/utils';
import { toPromise } from '@holochain-open-dev/signals';

import { RoleClaim } from '../../ui/src/types.js';
import { sampleRoleClaim } from '../../ui/src/mocks.js';
import { setup } from './setup.js';

test('create a RoleClaim and get all roles', async () => {
  await runScenario(async scenario => {
    const { alice, bob } = await setup(scenario);

    // Bob gets all roles
    let collectionOutput = await toPromise(bob.store.allRoles);
    assert.equal(collectionOutput.size, 0);

    // Alice creates a RoleClaim
    const roleClaim: EntryRecord<RoleClaim> = await alice.store.client.createRoleClaim(await sampleRoleClaim(alice.store.client));
    assert.ok(roleClaim);
    
    await dhtSync(
      [alice.player, bob.player],
      alice.player.cells[0].cell_id[0]
    );
    
    // Bob gets all roles again
    collectionOutput = await toPromise(bob.store.allRoles);
    assert.equal(collectionOutput.size, 1);
    assert.deepEqual(roleClaim.actionHash, Array.from(collectionOutput.keys())[0]);    
  });
});

