---
to: <%= path %>/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import * as React from 'react'

type T<%= h.changeCase.pascalCase(name)  %>State = boolean
type T<%= h.changeCase.pascalCase(name)  %>Dispatch = (arg: boolean) => void

export const <%= h.changeCase.pascalCase(name)  %>StateContext = React.createContext<T<%= h.changeCase.pascalCase(name)  %>State>(false)

export const <%= h.changeCase.pascalCase(name)  %>UpdateContext =
	React.createContext<T<%= h.changeCase.pascalCase(name)  %>Dispatch | null>(null)

export function use<%= h.changeCase.pascalCase(name)  %>State() {
	return React.useContext(<%= h.changeCase.pascalCase(name)  %>StateContext) as T<%= h.changeCase.pascalCase(name)  %>State
}

export function use<%= h.changeCase.pascalCase(name)  %>Dispatch() {
	return React.useContext(<%= h.changeCase.pascalCase(name)  %>UpdateContext) as T<%= h.changeCase.pascalCase(name)  %>Dispatch
}

export function use<%= h.changeCase.pascalCase(name)  %>(): [T<%= h.changeCase.pascalCase(name)  %>State, T<%= h.changeCase.pascalCase(name)  %>Dispatch] {
	return [use<%= h.changeCase.pascalCase(name)  %>State(), use<%= h.changeCase.pascalCase(name)  %>Dispatch()]
}

export interface T<%= h.changeCase.pascalCase(name)  %>ProviderProps {
	children: React.ReactNode
}

export function <%= h.changeCase.pascalCase(name)  %>Provider({ children }: T<%= h.changeCase.pascalCase(name)  %>ProviderProps): JSX.Element {
	const [value, set] = React.useState(false)

	return (
		<<%= h.changeCase.pascalCase(name)  %>StateContext.Provider value={value}>
			<<%= h.changeCase.pascalCase(name)  %>UpdateContext.Provider value={set}>
				{children}
			</<%= h.changeCase.pascalCase(name)  %>UpdateContext.Provider>
		</<%= h.changeCase.pascalCase(name)  %>StateContext.Provider>
	)
}

