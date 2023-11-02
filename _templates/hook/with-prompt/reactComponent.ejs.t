---
to: <%= path %>/hooks/use<%= h.changeCase.pascalCase(name)  %>/use<%= h.changeCase.pascalCase(name)  %>.tsx
---
import * as React from 'react'

export type T<%= h.changeCase.pascalCase(name) %>Args =  {}

export function use<%= h.changeCase.pascalCase(name) %>(args: T<%= h.changeCase.pascalCase(name) %>Args)  %> {
  // 
}

