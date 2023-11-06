import type { CollectionConfig } from 'payload/types'
// import type { User } from 'payload/generated-types'
import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	labels: {
		plural: 'Users',
		singular: 'user',
	},
	admin: {
		useAsTitle: 'email',
		group: 'Settings',
	},
	access: {
		// Only admins can create users
		create: isAdmin,
		// Admins can read all, but any other logged in user can only read themselves
		read: isAdminOrSelf,
		// Admins can update all, but any other logged in user can only update themselves
		update: isAdminOrSelf,
		// Only admins can delete
		delete: isAdmin,
	},
	fields: [
		{
			type: 'text',
			name: 'name',
		},

		{
			name: 'roles',
			saveToJWT: true,
			type: 'select',
			hasMany: true,
			defaultValue: ['editor'],
			access: {
				// Only admins can create or update a value for this field
				create: isAdminFieldLevel,
				update: isAdminFieldLevel,
			},
			options: [
				{
					label: 'Admin',
					value: 'admin',
				},
				{
					label: 'Editor',
					value: 'editor',
				},
				{
					label: 'Client',
					value: 'client',
				},
			],
		},

		{
			name: 'teams',
			// Save this field to JWT so we can use from `req.user`
			saveToJWT: true,
			type: 'relationship',
			relationTo: 'teams',
			hasMany: true,
			access: {
				// Only admins can create or update a value for this field
				create: isAdminFieldLevel,
				update: isAdminFieldLevel,
			},
			admin: {
				// eslint-disable-next-line no-implicit-coercion
				condition: ({ roles }) => !!roles && !roles.includes('admin'),
				description:
					'This field sets which sites that this user has access to.',
			},
		},
	],
}

export default Users
