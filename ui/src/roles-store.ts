import { RoleClaim } from './types.js';

import { 
  collectionSignal, 
  liveLinksSignal, 
  deletedLinksSignal, 
  allRevisionsOfEntrySignal,
  latestVersionOfEntrySignal, 
  immutableEntrySignal, 
  deletesForEntrySignal, 
  AsyncComputed,
  pipe,
} from "@holochain-open-dev/signals";
import { slice, HashType, retype, EntryRecord, LazyHoloHashMap } from "@holochain-open-dev/utils";
import { NewEntryAction, Record, ActionHash, EntryHash, AgentPubKey } from '@holochain/client';

import { RolesClient } from './roles-client.js';

export class RolesStore {
  constructor(public client: RolesClient) {}
  
  /** Role Claim */

  roleClaims = new LazyHoloHashMap((roleClaimHash: ActionHash) => ({
    entry: immutableEntrySignal(() => this.client.getRoleClaim(roleClaimHash)),
    deletes: deletesForEntrySignal(this.client, roleClaimHash, () => this.client.getAllDeletesForRoleClaim(roleClaimHash)),
  }));
  
  /** All Roles */

  allRoles = pipe(
    collectionSignal(
      this.client, 
      () => this.client.getAllRoles(),
      'AllRoles'
    ),
    allRoles => slice(this.roleClaims, allRoles.map(l => l.target))
  );
}
