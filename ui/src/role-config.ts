import { msg } from '@lit/localize';

export interface RoleConfig {
	role: string;
	singular_name: string;
	plural_name: string;
	description: string;
}

export const adminRoleConfig: RoleConfig = {
	role: 'admin',
	singular_name: msg('Administrator'),
	plural_name: msg('Administrators'),
	description: msg(
		'Administrators can add and remove assignees for any other role.',
	),
};
