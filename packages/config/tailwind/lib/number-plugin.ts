import plugin from 'tailwindcss/plugin'

export const numberPlugin = plugin(({ addBase }) => {
	addBase({
		"input[type='search']::-webkit-search-decoration,\ninput[type='search']::-webkit-search-cancel-button,\ninput[type='search']::-webkit-search-results-button,\ninput[type='search']::-webkit-search-results-decoration":
			{
				WebkitAppearance: 'none',
				appearance: 'none',
			},
		'input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button': {
			WebkitAppearance: 'none',
			margin: '0',
		},
		"input[type='number']": { MozAppearance: 'textfield' },
	})
})
