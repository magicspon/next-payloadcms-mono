const { resolve } = require('node:path')
const rules = {
	ON: 2,
	OFF: 0,
	WARN: 1,
}
const project = resolve(process.cwd(), 'tsconfig.json')

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
	extends: [
		'@vercel/style-guide/eslint/browser',
		'@vercel/style-guide/eslint/typescript',
		// '@vercel/style-guide/eslint/react',
	].map(require.resolve),
	parserOptions: {
		project,
	},
	globals: {
		React: true,
		JSX: true,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
	},
	ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],

	rules: {
		'eslint-comments/require-description': rules.OFF,
		'import/no-default-export': rules.OFF,
		'@typescript-eslint/no-non-null-assertion': rules.OFF,
		'@typescript-eslint/explicit-function-return-type': rules.OFF,
		'@typescript-eslint/no-var-requires': rules.OFF,
		'unicorn/filename-case': rules.OFF,
		'react/jsx-sort-props': rules.OFF,
	},
}
