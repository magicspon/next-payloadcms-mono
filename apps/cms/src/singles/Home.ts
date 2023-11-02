import { GlobalConfig } from 'payload/types'
import { RichText } from '../fields/RichText'

const Home: GlobalConfig = {
	slug: 'home',
	admin: {
		group: 'Company',
	},

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
