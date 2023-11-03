import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
	'relative inline-flex items-center text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-border-dark',
				brand: 'bg-brand text-brand-foreground hover:bg-brand/80',
				destructive:
					'border-destructive border text-destructive hover:bg-destructive hover:text-destructive-foreground',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-12 px-4 py-2 gap-2',
				sm: 'h-9  px-3 gap-1.5',
				lg: 'h-14  px-8 gap-3',
				icon: 'h-10 w-10',
			},
			loading: {
				true: '!text-transparent',
			},
			center: {
				true: 'justify-center',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			center: true,
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{
		className,
		variant,
		size,
		asChild = false,
		loading,
		center,
		type = 'button',
		...props
	},
	ref,
) {
	const Comp = asChild ? Slot : 'button'
	return (
		<Comp
			className={buttonVariants({
				variant,
				size,
				center,
				loading,
				className,
			})}
			ref={ref}
			type={asChild ? undefined : type}
			{...props}
		/>
	)
})

export { Button, buttonVariants }
