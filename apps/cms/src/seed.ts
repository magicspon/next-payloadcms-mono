import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
	// Local API methods skip all access control by default
	// so we can easily create an admin user directly in init
	await payload.create({
		collection: 'users',
		data: {
			email: 'hello@spon.io',
			name: 'Dave',
			password: 'test',
			roles: ['admin'],
		},
	})
}
