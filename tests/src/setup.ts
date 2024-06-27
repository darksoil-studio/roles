import { AppBundle, encodeHashToBase64 } from '@holochain/client';
import { AgentApp, Scenario, enableAndGetAgentApp } from '@holochain/tryorama';
import { decode, encode } from '@msgpack/msgpack';
import { decompressSync, unzipSync } from 'fflate';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { RolesClient } from '../../ui/src/roles-client.js';
import { RolesStore } from '../../ui/src/roles-store.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function rolesTestHapp(): AppBundle {
	const rolesTestHapp = path.join(__dirname, '../../workdir/roles_test.happ');

	const appBundleBytes = fs.readFileSync(rolesTestHapp);

	return decode(decompressSync(new Uint8Array(appBundleBytes))) as any;
}

export async function setup(scenario: Scenario) {
	const aliceConductor = await scenario.addConductor();
	const alicePubKey = await aliceConductor.adminWs().generateAgentPubKey();

	const appBundle = rolesTestHapp();

	const role = appBundle.manifest.roles.find(r => r.name === 'roles_test')!;
	role.dna.modifiers = {
		...role.dna.modifiers,
		properties: {
			progenitors: [encodeHashToBase64(alicePubKey)],
		} as any,
	};
	const appBundleSource = { bundle: appBundle };

	const appInfo = await aliceConductor.installApp(appBundleSource, {
		agentPubKey: alicePubKey,
		networkSeed: scenario.networkSeed,
	});

	const port = await aliceConductor.attachAppInterface();

	const issued = await aliceConductor.adminWs().issueAppAuthenticationToken({
		installed_app_id: appInfo.installed_app_id,
	});
	const appWs = await aliceConductor.connectAppWs(issued.token, port);

	const alice: AgentApp = await enableAndGetAgentApp(
		aliceConductor.adminWs(),
		appWs,
		appInfo,
	);
	// Add 2 players with the test hApp to the Scenario. The returned players
	// can be destructured.
	const [bob, carol] = await scenario.addPlayersWithApps([
		{ appBundleSource },
		{ appBundleSource },
	]);

	const aliceStore = new RolesStore(
		new RolesClient(appWs as any, 'roles_test', 'roles'),
	);

	const bobStore = new RolesStore(
		new RolesClient(bob.appWs as any, 'roles_test', 'roles'),
	);

	const carolStore = new RolesStore(
		new RolesClient(carol.appWs as any, 'roles_test', 'roles'),
	);

	// Shortcut peer discovery through gossip and register all agents in every
	// conductor of the scenario.
	await scenario.shareAllAgents();

	return {
		alice: {
			player: { conductor: aliceConductor, appWs, ...alice },
			store: aliceStore,
		},
		bob: {
			player: bob,
			store: bobStore,
		},
		carol: {
			player: carol,
			store: carolStore,
		},
	};
}
