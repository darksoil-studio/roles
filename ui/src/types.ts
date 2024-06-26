import { 
  Record, 
  ActionHash, 
  DnaHash,
  SignedActionHashed,
  EntryHash, 
  AgentPubKey,
  Create,
  Update,
  Delete,
  CreateLink,
  DeleteLink
} from '@holochain/client';
import { ActionCommittedSignal } from '@holochain-open-dev/utils';

export type RolesSignal = ActionCommittedSignal<EntryTypes, LinkTypes>;

export type EntryTypes =
 | ({  type: 'RoleClaim'; } & RoleClaim);

export type LinkTypes = string;



export interface RoleClaim { 
  role_name: string;

  assign_role_create_link_hash: ActionHash;
}

