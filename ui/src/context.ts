import { createContext } from '@lit/context';

import { RolesStore } from './roles-store.js';

export const rolesStoreContext = createContext<RolesStore>('roles/store');
