const { resolve } = require('node:path')
const rules = {
	ON: 2,
	OFF: 0,
	WARN: 1,
}
const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: ['@vercel/style-guide/eslint/typescript', 'eslint-config-turbo'].map(
		require.resolve,
	),
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
	ignorePatterns: ['node_modules/', 'dist/'],
	rules: {
		'eslint-comments/require-description': rules.OFF,
		'@typescript-eslint/no-non-null-assertion': rules.OFF,
		'@typescript-eslint/explicit-function-return-type': rules.OFF,
		'@typescript-eslint/no-var-requires': rules.OFF,
		'@typescript-eslint/no-unsafe-assignment': rules.OFF,
		'@typescript-eslint/no-unsafe-member-access': rules.OFF,
		'@typescript-eslint/restrict-template-expressions': rules.OFF,
		'@typescript-eslint/no-unsafe-call': rules.OFF,
		'@typescript-eslint/no-explicit-any': rules.OFF,
		'@typescript-eslint/no-floating-promises': rules.OFF,
		'import/no-default-export': rules.OFF,
		'import/no-extraneous-dependencies': rules.OFF,
		'import/no-named-as-default': rules.OFF,
		'react/jsx-sort-props': rules.OFF,
		'unicorn/filename-case': rules.OFF,
		'no-undef': rules.OFF,
	},
}
