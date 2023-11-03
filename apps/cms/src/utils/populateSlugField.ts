import type { BeforeChangeHook } from 'payload/dist/collections/config/types'
import slugify from 'slugify'

export const populateSlugField: BeforeChangeHook = ({ data, req }) => {
	if (req.body) {
		const input = (data.slug.length ? data.slug : data.title) as string
		return {
			...data,
			slug: slugify(input, {
				strict: true,
				lower: true,
				trim: true,
			}),
		}
	}
	return data
}
