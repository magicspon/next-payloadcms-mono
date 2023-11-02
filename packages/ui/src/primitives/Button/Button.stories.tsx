import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '.'

const meta = {
	component: Button,
	title: 'primitives/Button',
} satisfies Meta<typeof Button>

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
