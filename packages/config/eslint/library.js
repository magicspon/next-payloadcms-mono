const rules = {
	ON: 2,
	OFF: 0,
	WARN: 1,
}

module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},

	parserOptions: {
		// project: './tsconfig.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	env: {
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'turbo',
		'prettier',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': rules.WARN,
		'@typescript-eslint/no-empty-interface': rules.OFF,
		'@typescript-eslint/no-explicit-any': rules.OFF,
		'@typescript-eslint/no-non-null-assertion': rules.OFF,
		'react/react-in-jsx-scope': rules.OFF,
		'react/prop-types': rules.OFF,
	},
}
