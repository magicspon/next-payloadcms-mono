import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const secret = searchParams.get('secret')
	const uri = searchParams.get('uri')
	if (!uri || secret !== process.env.PAYLOAD_PREVIEW_TOKEN) {
		return new Response('Invalid token', { status: 401 })
	}
	draftMode().enable()
	redirect(uri)
}
