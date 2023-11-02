/* eslint-disable @typescript-eslint/no-var-requires */
// import fontMetrics from '@capsizecss/metrics/roboto'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore meh
import capsize from '@themosaad/tailwindcss-capsize'
import { shadcnPlugin } from './lib/shadcn-plugin'
import { extraVariants } from './lib/extra-variants'
import { nprogressPlugin } from './lib/nprogress-plugin'
import { numberPlugin } from './lib/number-plugin'
import containerQueries from '@tailwindcss/container-queries'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore meh
import animate from 'tailwindcss-animate'

const config = {
	content: ['./src/**/*.{ts,tsx}', '../../packages/ui/**/*.{ts,tsx}'],
	darkMode: 'media',
	theme: {
		capsize: {
			rootLineHeightUnitless: 1.2,
			fontMetrics: {
				sans: {
					capHeight: 2048,
					ascent: 2728,
					descent: -680,
					lineGap: 0,
					unitsPerEm: 2816,
				},
			},
			className: 'trim',
		},
		data: {
			// state
			on: 'state~="on"',
			checked: 'state~="checked"',
			unchecked: 'state~="unchecked"',
			active: 'state~="active"',
			inactive: 'state~="inactive"',
			open: 'state~="open"',
			closed: 'state~="closed"',
			cancels: 'state~="cancels"',
			loading: 'state~="loading"',
			pending: 'state~="pending"',
			finished: 'state~="finished"',
			start: 'swipe~="start"',
			move: 'swipe~="move"',
			cancel: 'swipe~="cancel"',
			end: 'swipe~="end"',
		},
		extend: {
			animation: {
				expand: 'expand 0.3s ease-in-out',
				collapse: 'collapse 0.3s ease-in-out',
				'enter-right': 'enter-right 0.7s ease-in',
				'exit-right': 'exit-right 0.7s ease-out',
				'enter-bottom': 'enter-bottom 0.7s ease-in',
				'exit-bottom': 'exit-bottom 0.7s ease-out',
				'fade-in': 'fade-in 0.3s ease-in-out',
				'fade-out': 'fade-out 0.3s ease-in-out',
				'slide-in': 'slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-out': 'slide-out 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
			backgroundImage: {
				chevron: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
			},
			colors: {
				teamStart: 'var(--team-start)',
				teamEnd: 'var(--team-end)',
			},
			containers: {
				'4xs': '10rem',
				'3xs': '12rem',
				'2xs': '16rem',
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
			},
			keyframes: {
				expand: {
					'0%': { height: '0' },
					'100%': { height: 'var(--radix-collapsible-content-height)' },
				},
				collapse: {
					'0%': { height: 'var(--radix-collapsible-content-height)' },
					'100%': { height: '0' },
				},

				'enter-right': {
					'0%': { transform: 'translate3d(100%,0,0)' },
					'100%': { transform: 'translate3d(0%,0,0)' },
				},
				'exit-right': {
					'0%': { transform: 'translate3d(0%,0,0)' },
					'100%': { transform: 'translate3d(100%,0,0)' },
				},

				'enter-bottom': {
					'0%': { transform: 'translate3d(0,100%,0)' },
					'100%': { transform: 'translate3d(0%,0,0)' },
				},
				'exit-bottom': {
					'0%': { transform: 'translate3d(0%,0,0)' },
					'100%': { transform: 'translate3d(0,100%,0)' },
				},

				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '100' },
				},
				'fade-out': {
					'0%': { opacity: '100' },
					'100%': { opacity: '0' },
				},

				'slide-in': {
					'0%': {
						transform: 'translateX(calc(100% + var(--viewport-padding)))',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},

				'slide-out': {
					'0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
					'100%': {
						transform: 'translateX(calc(100% + var(--viewport-padding)))',
					},
				},
			},
			minWidth: ({ theme }) => ({
				...theme('spacing'),
			}),
			maxWidth: ({ theme }) => ({
				...theme('width'),
				container: '86rem',
			}),
			minHeight: ({ theme }) => ({
				...theme('spacing'),
			}),
			screens: {
				'3xl': '1800px',
			},
			translate: {
				'radix-toast-swipe-move-x': 'var(--radix-toast-swipe-move-x)',
				'radix-toast-swipe-move-y': 'var(--radix-toast-swipe-move-y)',
				'radix-toast-swipe-end-x': 'var(--radix-toast-swipe-end-x)',
				'radix-toast-swipe-end-y': 'var(--radix-toast-swipe-end-y)',
				custom: 'var(--translate)',
			},
			zIndex: {
				100: '100',
				500: '500',
				1000: '1000',
			},
		},
	},
	plugins: [
		containerQueries,
		typography,
		capsize,
		animate,
		shadcnPlugin,
		extraVariants,
		nprogressPlugin,
		numberPlugin,
	],
} satisfies Config

export default config
