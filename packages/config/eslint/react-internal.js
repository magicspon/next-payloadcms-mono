const { resolve } = require('node:path')
// const project = resolve(process.cwd(), 'tsconfig.json')
// const rules = {
// 	ON: 2,
// 	OFF: 0,
// 	WARN: 1,
// }

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
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
	// 	react: {
	// 		version: 'detect',
	// 	},
	// 	'import/resolver': {
	// 		typescript: {
	// 			project,
	// 		},
	// 	},
	// },
	// ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
}
