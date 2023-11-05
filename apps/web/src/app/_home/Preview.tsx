'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import type { Home } from 'cms/src/payload-types'
import { HomePage } from '.'

export function HomePagePreview({ page }: { page: Home }) {
	const { data } = useLivePreview({
		serverURL: `http://localhost:3030`,
		depth: 2,
		initialData: page,
	})

	return <HomePage page={data} />
}
