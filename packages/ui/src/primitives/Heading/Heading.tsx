import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

export type HeadingStyleProps = VariantProps<typeof headingVariants>

export interface THeadingProps
	extends React.HTMLAttributes<
			HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement
		>,
		HeadingStyleProps {
	asChild?: boolean
	level?: 1 | 2 | 3 | 4
}

export const Heading = React.forwardRef<
	HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement,
	THeadingProps
>(function Heading(
	{
		asChild,
		className,
		weight,
		intent,
		center,
		noTrim = false,
		level = 2,
		...props
	},
	ref,
): JSX.Element {
	const Comp = asChild ? Slot : `h${level}`
	const cx = headingVariants({
		weight,
		className,
		noTrim,
		center,
		intent,
	})

	return <Comp ref={ref} className={cx} {...props} />
})

export const headingVariants = cva('scroll-m-20', {
	variants: {
		weight: {
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},

		intent: {
			h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
			h2: 'text-3xl',
			h3: 'text-2xl',
			h4: 'text-xl',
		},

		center: {
			true: 'text-center',
		},

		noTrim: {
			false: 'trim',
		},
	},
	defaultVariants: {
		weight: 'normal',
		intent: 'h2',
		noTrim: false,
	},
})
