import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Heading } from '.'

const meta = {
	component: Heading,
	title: 'primitives/Heading',
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: (
			<a href="#0" className="inline-block">
				Hello world
			</a>
		),
		variant: 'brand',
		// type: 'button',
		asChild: true,
	},
}
