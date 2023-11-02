import { LinkFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const RichText = lexicalEditor({
	features: ({ defaultFeatures }) => [
		...defaultFeatures,
		LinkFeature({
			// Example showing how to customize the built-in fields
			// of the Link feature
			fields: [
				{
					name: 'rel',
					label: 'Rel Attribute',
					type: 'select',
					hasMany: true,
					options: ['noopener', 'noreferrer', 'nofollow'],
					admin: {
						description:
							'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
					},
				},
			],
		}),
		// This is incredibly powerful. You can re-use your Payload blocks
		// directly in the Lexical editor as follows:
		// BlocksFeature({
		//   blocks: [
		//     Banner,
		//     CallToAction,
		//   ],
		// }),
	],
})
