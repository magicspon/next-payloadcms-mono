import plugin from 'tailwindcss/plugin'

export const extraVariants = plugin(({ addVariant }) => {
	addVariant('hocus', ['&:hover', '&:focus'])
	addVariant('between', `& > *:not(:last-child)`)
	addVariant('child', `& > *`)
	addVariant(
		'placeholder-unfocus',
		`&:placeholder-shown:not(:focus)::placeholder`,
	)
	addVariant('placeholder-not-shown', `&:not(:placeholder-shown)`)
	addVariant(
		'placeholder-visible',
		`:merge(.peer):placeholder-shown:not(:focus) ~ &`,
	)
})
