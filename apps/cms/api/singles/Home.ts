import type { GlobalConfig } from 'payload/types'
import { RichText } from '../fields/RichText'
import { createPreviewUrl } from '../utils/previewUrl'

const Home: GlobalConfig = {
	slug: 'home',
	admin: {
		group: 'Company',

		livePreview: {
			url: () => createPreviewUrl('/'),
		},
	},

	access: { read: () => true },

	fields: [
		{
			type: 'text',
			name: 'title',
		},
		{
			type: 'tabs',
			tabs: [
				{
					name: 'teaser',
					fields: [
						{
							type: 'text',
							name: 'blurb',
						},
					],
				},

				{
					name: 'page',
					fields: [
						{
							type: 'richText',
							name: 'content',
							editor: RichText,
						},
					],
				},
			],
		},
	],
}

export default Home
