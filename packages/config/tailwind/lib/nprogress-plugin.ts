import plugin from 'tailwindcss/plugin'

export const nprogressPlugin = plugin(({ addBase }) => {
	// colours
	addBase({
		'#nprogress': { pointerEvents: 'none' },
		'#nprogress .bar': {
			background: 'hsl(var(--brand))',
			position: 'fixed',
			zIndex: '1031',
			top: '0',
			left: '0',
			width: '100%',
			height: '2px',
		},
		'#nprogress .peg': {
			display: 'block',
			position: 'absolute',
			right: '0px',
			width: '100px',
			height: '100%',
			boxShadow: '0 0 10px hsl(var(--brand)),\n    0 0 5px hsl(var(--brand))',
			opacity: '1',
			transform: 'rotate(3deg) translate(0px, -4px)',
		},
		'#nprogress .spinner': {
			display: 'block',
			position: 'fixed',
			zIndex: '1031',
			top: '15px',
			right: '15px',
		},
		'#nprogress .spinner-icon': {
			width: '18px',
			height: '18px',
			boxSizing: 'border-box',
			border: 'solid 2px transparent',
			borderTopColor: 'hsl(var(--brand))',
			borderLeftColor: 'hsl(var(--brand))',
			borderRadius: '50%',
			animation: 'nprogress-spinner 400ms linear infinite',
		},
		'.nprogress-custom-parent': { overflow: 'hidden', position: 'relative' },
		'.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar':
			{
				position: 'absolute',
			},
		'@keyframes nprogress-spinner': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		},
	})
})
