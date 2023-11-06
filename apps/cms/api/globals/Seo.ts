import type { GlobalConfig } from 'payload/types'

const Seo: GlobalConfig = {
	slug: 'seo',
	admin: {
		group: 'Settings',
	},
	fields: [
		{
			type: 'text',
			name: 'title',
		},
		{
			type: 'textarea',
			name: 'description',
		},
	],
}

export default Seo
