module.exports = {
	extends: ['custom/react-internal', 'plugin:storybook/recommended'],
	rules: {
		'import/no-extraneous-dependencies': [
			0,
			{
				devDependencies: false,
				includeInternal: false,
				includeTypes: false,
				packageDir: ['.', '../..'], // <--- the key addition
			},
		],
	},
}
