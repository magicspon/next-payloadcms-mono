const path = require('path')
const { withPayload } = require('@payloadcms/next-payload')

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	transpilePackages: ['ui', 'utils'],

	compiler: {
		reactRemoveProperties: process.env.VERCEL_ENV === 'production',
	},

	experimental: {
		outputFileTracingExcludes: {
			'*': [
				'node_modules/@swc/core-linux-x64-gnu',
				'node_modules/@swc/core-linux-x64-musl',
				'node_modules/esbuild-linux-64/bin',
				'node_modules/esbuild/linux-x64',
				'node_modules/webpack/lib',
			],
		},
	},

	// We already do linting on GH actions
	eslint: {
		// eslint-disable-next-line no-implicit-coercion
		ignoreDuringBuilds: !!process.env.CI,
	},
}

module.exports = withPayload(config, {
	// The second argument to `withPayload`
	// allows you to specify paths to your Payload dependencies
	// and configure the admin route to your Payload CMS.

	// Point to your Payload config (Required)
	configPath: path.resolve(process.cwd(), '../cms/src/payload.config.ts'),

	// Point to your exported, initialized Payload instance (optional, default shown below`)
	payloadPath: path.resolve(process.cwd(), './payload/payloadClient.ts'),

	// Set a custom Payload admin route (optional, default is `/admin`)
	// NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
	adminRoute: '/admin',
})
