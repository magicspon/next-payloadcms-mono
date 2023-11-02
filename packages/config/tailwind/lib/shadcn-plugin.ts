import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
	({ addBase }) => {
		// colours
		addBase({
			':root': {
				'--background': '0 0% 100%',
				'--foreground': '222.2 84% 4.9%',
				'--muted': '210 40% 96.1%',
				'--muted-foreground': '215.4 16.3% 46.9%',
				'--popover': '0 0% 100%',
				'--popover-foreground': '222.2 84% 4.9%',
				'--card': '0 0% 100%',
				'--card-foreground': '222.2 84% 4.9%',
				'--border': '214.3 31.8% 91.4%',
				'--border-dark': '0 0% 50%',
				'--input': '214.3 31.8% 91.4%',
				'--input-dark': '0 0% 50%',
				'--brand': '235 100% 65%',
				'--brand-foreground': '0 0% 100%',
				'--alt': '274 100% 57%',
				'--alt-foreground': '0 0% 100%',
				'--primary': '222.2 47.4% 11.2%',
				'--primary-foreground': '210 40% 98%',
				'--secondary': '210 40% 96.1%',
				'--secondary-foreground': '222.2 47.4% 11.2%',
				'--accent': '210 40% 96.1%',
				'--accent-foreground': '222.2 47.4% 11.2%',
				'--destructive': '16 86% 54%',
				'--destructive-foreground': '210 40% 98%',
				'--ring': '215 20.2% 65.1%',
				'--radius': '0.5rem',
				'--warning': '38 92% 50%',
				'--warning-foreground': '48 96% 89%',
				'--error': '16 86% 54%',
				'--error-foreground': '0 0% 100%',
			},
		})
	},
	{
		theme: {
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1400px',
				},
			},
			extend: {
				colors: {
					border: {
						DEFAULT: 'hsl(var(--border))',
						dark: 'hsl(var(--border-dark))',
					},
					input: {
						DEFAULT: 'hsl(var(--input))',
						dark: 'hsl(var(--input-dark))',
					},
					ring: 'hsl(var(--ring))',
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					brand: {
						DEFAULT: 'hsl(var(--brand))',
						foreground: 'hsl(var(--brand-foreground))',
					},
					alt: {
						DEFAULT: 'hsl(var(--alt))',
						foreground: 'hsl(var(--alt-foreground))',
					},
					primary: {
						DEFAULT: 'hsl(var(--primary))',
						foreground: 'hsl(var(--primary-foreground))',
					},
					secondary: {
						DEFAULT: 'hsl(var(--secondary))',
						foreground: 'hsl(var(--secondary-foreground))',
					},
					destructive: {
						DEFAULT: 'hsl(var(--destructive))',
						foreground: 'hsl(var(--destructive-foreground))',
					},
					muted: {
						DEFAULT: 'hsl(var(--muted))',
						foreground: 'hsl(var(--muted-foreground))',
					},
					accent: {
						DEFAULT: 'hsl(var(--accent))',
						foreground: 'hsl(var(--accent-foreground))',
					},
					popover: {
						DEFAULT: 'hsl(var(--popover))',
						foreground: 'hsl(var(--popover-foreground))',
					},
					card: {
						DEFAULT: 'hsl(var(--card))',
						foreground: 'hsl(var(--card-foreground))',
					},
					warning: {
						DEFAULT: 'hsl(var(--warning))',
						foreground: 'hsl(var(--warning-foreground))',
					},
					error: {
						DEFAULT: 'hsl(var(--error))',
						foreground: 'hsl(var(--error-foreground))',
					},
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)',
				},
				keyframes: {
					'accordion-down': {
						from: { height: '0' },
						to: { height: 'var(--radix-accordion-content-height)' },
					},
					'accordion-up': {
						from: { height: 'var(--radix-accordion-content-height)' },
						to: { height: '0' },
					},
				},
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out',
				},
			},
		},
	},
)
