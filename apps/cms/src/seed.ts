import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
	// Local API methods skip all access control by default
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
