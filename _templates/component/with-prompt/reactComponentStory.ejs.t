---
to: "<%= storybook ? `${path}/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.stories.tsx` : null %>"
---
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { <%= h.changeCase.pascalCase(name) %> } from '.'

const meta = {
	component: <%= h.changeCase.pascalCase(name) %>,
	title: 'primitives/<%= h.changeCase.pascalCase(name) %>',
} satisfies Meta<typeof <%= h.changeCase.pascalCase(name) %>>

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
