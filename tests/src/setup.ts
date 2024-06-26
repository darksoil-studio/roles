import { 
  AgentPubKey,
  EntryHash,
  NewEntryAction,
  ActionHash,
  Record,
  AppBundleSource,
  fakeActionHash,
  fakeAgentPubKey,
  fakeEntryHash,
  fakeDnaHash,
  AppCallZomeRequest,
  AppWebsocket,
  encodeHashToBase64 
} from '@holochain/client';
import { encode } from '@msgpack/msgpack';
import { Scenario } from '@holochain/tryorama';
import { EntryRecord } from '@holochain-open-dev/utils';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { RolesClient } from '../../ui/src/roles-client.js';
import { RolesStore } from '../../ui/src/roles-store.js';

export async function setup(scenario: Scenario) {
  const testHappUrl =
    dirname(fileURLToPath(import.meta.url)) + '/../../workdir/roles_test.happ';

  // Add 2 players with the test hApp to the Scenario. The returned players
  // can be destructured.
  const [alice, bob] = await scenario.addPlayersWithApps([
    { appBundleSource: { path: testHappUrl } },
    { appBundleSource: { path: testHappUrl } },
  ]);

  // Shortcut peer discovery through gossip and register all agents in every
  // conductor of the scenario.
  await scenario.shareAllAgents();

  const aliceStore = new RolesStore(
    new RolesClient(alice.appWs as any, 'roles_test', 'roles')
  );

  const bobStore = new RolesStore(
    new RolesClient(bob.appWs as any, 'roles_test', 'roles')
  );

  // Shortcut peer discovery through gossip and register all agents in every
  // conductor of the scenario.
  await scenario.shareAllAgents();

  return {
    alice: {
      player: alice,
      store: aliceStore,
    },
    bob: {
      player: bob,
      store: bobStore,
    },
  };
}

