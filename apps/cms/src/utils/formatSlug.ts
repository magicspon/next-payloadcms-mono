import type { FieldHook } from 'payload/types'
import slugify from 'slugify'

const format = (val: string): string =>
	slugify(val, { strict: true, lower: true, trim: true })

export const formatSlug =
	(fallback: string): FieldHook =>
	({ data, operation, originalDoc, value }) => {
		if (typeof value === 'string') {
			return format(value)
		}

		if (operation === 'create') {
			const fallbackData = data?.[fallback] || originalDoc?.[fallback]

			if (fallbackData && typeof fallbackData === 'string') {
				return format(fallbackData)
			}
		}

		return value
	}
