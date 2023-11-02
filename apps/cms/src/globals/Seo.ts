import { GlobalConfig } from 'payload/types'
import { RichText } from '../fields/RichText'

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
