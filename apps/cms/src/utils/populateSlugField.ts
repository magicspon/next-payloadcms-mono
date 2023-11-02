import type { BeforeChangeHook } from 'payload/dist/collections/config/types'
import slugify from 'slugify'

export const populateSlugField: BeforeChangeHook = ({
	data,
	operation,
	req,
}) => {
	if (operation === 'create' || operation === 'update') {
		if (req.body) {
			const input = data.slug.length ? data.slug : data.title
			return {
				...data,
				slug: slugify(input, {
					strict: true,
					lower: true,
					trim: true,
				}),
			}
		}
	}

	return data
}
