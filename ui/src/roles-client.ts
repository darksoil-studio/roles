import { 
  SignedActionHashed,
  CreateLink,
  Link,
  DeleteLink,
  Delete,
  AppClient, 
  Record, 
  ActionHash, 
  EntryHash, 
  AgentPubKey,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@holochain-open-dev/utils';

import { RolesSignal } from './types.js';

export class RolesClient extends ZomeClient<RolesSignal> {

  constructor(public client: AppClient, public roleName: string, public zomeName = 'roles') {
    super(client, roleName, zomeName);
  }
}
