import type { BeforeChangeHook } from 'payload/dist/collections/config/types'

export const populatePublishedDate: BeforeChangeHook = ({
	data,
	operation,
	req,
}) => {
	if (operation === 'create') {
		if (req.body && !req.body.publishedDate) {
			const now = new Date()
			return {
				...data,
				publishedDate: now,
			}
		}
	}

	return data
}
