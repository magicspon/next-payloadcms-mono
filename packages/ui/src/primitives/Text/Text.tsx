import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

export type TextStyleProps = VariantProps<typeof textVariants>

export interface TTextProps
	extends React.HTMLAttributes<
			HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement
		>,
		TextStyleProps {
	asChild?: boolean
}

export const Text = React.forwardRef<
	HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement,
	TTextProps
>(function Text(
	{ asChild, className, weight, hue, intent, center, noTrim = false, ...props },
	ref,
): JSX.Element {
	const Comp = asChild ? Slot : 'p'
	const cx = textVariants({
		weight,
		className,
		hue,
		noTrim,
		center,
		intent,
	})

	return <Comp ref={ref} className={cx} {...props} />
})

export const textVariants = cva('font-sans', {
	variants: {
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},

		intent: {
			default: 'text-base leading-7',
		},

		center: {
			true: 'text-center',
		},

		hue: {
			dark: 'text-dark',
			rain: 'text-rain',
			brand: 'text-brand',
			alt: 'text-alt',
		},

		noTrim: {
			false: 'trim',
		},
	},
	defaultVariants: {
		weight: 'normal',
		intent: 'default',
		noTrim: false,
	},
})
