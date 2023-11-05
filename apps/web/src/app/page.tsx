import { draftMode } from 'next/headers'
import { HomePage } from './_home'
import { HomePagePreview } from './_home/Preview'

export default async function Page(): Promise<JSX.Element> {
	const data = await fetch(`http://localhost:3030/api/globals/home`, {
		method: 'GET',
	}).then((s) => s.json())

	const { isEnabled } = draftMode()

	if (isEnabled) return <HomePagePreview page={data} />

	return <HomePage page={data} />
}
