---
to: "<%= storybook ? `${path}/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.stories.tsx` : null %>"
---
import * as React from 'react'
import { Meta } from '@storybook/react'
import { <%= h.changeCase.pascalCase(name) %> } from '.'

export default {
	component: <%= h.changeCase.pascalCase(name) %>,
	title: 'core/<%= h.changeCase.pascalCase(name) %>',
} as Meta<typeof <%= h.changeCase.pascalCase(name) %>>

type Args = React.ComponentProps<typeof <%= h.changeCase.pascalCase(name) %>>

export const Baic = {
  render: (args: Args) => {
    return <<%= h.changeCase.pascalCase(name) %> {...args} />
  },

  args: {} satisfies Args,
}