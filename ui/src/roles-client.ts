import { RoleClaim } from './types.js';

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
  /** Role Claim */

  async createRoleClaim(roleClaim: RoleClaim): Promise<EntryRecord<RoleClaim>> {
    const record: Record = await this.callZome('create_role_claim', roleClaim);
    return new EntryRecord(record);
  }
  
  async getRoleClaim(roleClaimHash: ActionHash): Promise<EntryRecord<RoleClaim> | undefined> {
    const record: Record = await this.callZome('get_role_claim', roleClaimHash);
    return record ? new EntryRecord(record) : undefined;
  }

  deleteRoleClaim(originalRoleClaimHash: ActionHash): Promise<ActionHash> {
    return this.callZome('delete_role_claim', originalRoleClaimHash);
  }

  getAllDeletesForRoleClaim(originalRoleClaimHash: ActionHash): Promise<Array<SignedActionHashed<Delete>>> {
    return this.callZome('get_all_deletes_for_role_claim', originalRoleClaimHash);
  }

  getOldestDeleteForRoleClaim(originalRoleClaimHash: ActionHash): Promise<SignedActionHashed<Delete> | undefined> {
    return this.callZome('get_oldest_delete_for_role_claim', originalRoleClaimHash);
  }

  /** All Roles */

  async getAllRoles(): Promise<Array<Link>> {
    return this.callZome('get_all_roles', undefined);
  }

}
