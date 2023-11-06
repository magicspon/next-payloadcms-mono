import type { GlobalConfig } from 'payload/types'

const About: GlobalConfig = {
	slug: 'about',
	admin: {
		group: 'Company',
	},
	fields: [
		{
			type: 'text',
			name: 'title',
		},
	],
}

export default About
