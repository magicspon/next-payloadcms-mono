---
to: packages/<%= package %>/src/hooks/use<%= h.changeCase.pascalCase(name)  %>/use<%= h.changeCase.pascalCase(name)  %>.tsx
---
import { create } from 'zustand'

export interface T<%= h.changeCase.pascalCase(name) %>Store {
	value: boolean
	setValue: (v: boolean) => void
}

export const use<%= h.changeCase.pascalCase(name) %> = create<T<%= h.changeCase.pascalCase(name) %>Store>((set) => ({
	value: false,
	setValue: (value) => set({ value }),
}))
