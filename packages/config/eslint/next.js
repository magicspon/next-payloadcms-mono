const { resolve } = require('node:path')
// const project = resolve(process.cwd(), 'tsconfig.json')
// const rules = {
// 	ON: 2,
// 	OFF: 0,
// 	WARN: 1,
// }
/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: ['eslint-config-custom/library'].map(require.resolve),
	// parserOptions: {
	// 	project,
	// },
	// globals: {
	// 	React: true,
	// 	JSX: true,
	// },
	// settings: {
	// 	'import/resolver': {
	// 		typescript: {
	// 			project,
	// 		},
	// 	},
	// 	react: {
	// 		version: 'detect',
	// 	},
	// },
	// ignorePatterns: ['node_modules/', 'dist/'],
	// rules: {
	// 	'no-html-link-for-pages': rules.OFF,
	// },
}
