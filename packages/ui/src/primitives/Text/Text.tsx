import * as React from 'react'

export type TTextProps = {
	//
}

export function Text(props: TTextProps) {
	console.info(`<Text />`, props)
	return <div>Hello Hugh</div>
}
