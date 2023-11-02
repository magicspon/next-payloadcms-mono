---
to:  <%= path %>/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import * as React from 'react'

export type T<%= h.changeCase.pascalCase(name) %>Props = {
  //
}

export function <%= h.changeCase.pascalCase(name) %>(props: T<%= h.changeCase.pascalCase(name) %>Props) {
	console.info(`<<%= h.changeCase.pascalCase(name) %> />`, props)
  return (
    <div>Hello</div>
  )
}

