/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	transpilePackages: ['ui', 'utils'],

	compiler: {
		reactRemoveProperties: process.env.VERCEL_ENV === 'production',
	},

	experimental: {
		appDir: true,
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

export default config
