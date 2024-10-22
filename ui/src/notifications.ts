export const NOTIFICATIONS_TYPES = {
	ASSIGNED_ROLE: 'roles/assigned_role',
	UNASSIGNED_ROLE: 'roles/unassigned_role',
};

export type RolesNotification =
	| { type: 'AssignedRole'; role: string }
	| { type: 'UnassignedRole'; role: string };
