import path from 'path'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import seo from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'
import Users from './collections/Users'
import Home from './singles/Home'
import Seo from './globals/Seo'
import About from './singles/About'
import Pages from './collections/Pages'
import { seed } from './seed'
import { Teams } from './collections/Teams'

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
	},
	editor: lexicalEditor({}),
	collections: [Pages, Users, Teams],
	globals: [Home, About, Seo],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	cors: '*',
	// graphQL: {
	// 	schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	// },

	plugins: [
		nestedDocs({
			collections: ['pages'],
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error this is fine
			generateLabel: (_, doc) => doc.title ?? '',
			generateURL: (docs) =>
				docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
		}),
		seo({
			globals: ['about', 'seo'],
			collections: ['pages'],
			// generateTitle: ({ doc }) => `Hello | ${doc?.title?.value}`,
			// generateDescription: ({ doc }) => {
			// 	return doc?.excerpt?.value ?? ''
			// },
			// generateURL: ({ doc }) => {
			// 	// const d = doc

			// 	return ''
			// },
			tabbedUI: false,
		}),
	],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),

	onInit: async (payload) => {
		// If the `env` var `PAYLOAD_SEED` is set, seed the db
		if (process.env.PAYLOAD_SEED) {
			await seed(payload)
		}
	},
})
