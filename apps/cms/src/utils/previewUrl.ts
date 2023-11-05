export function createPreviewUrl(path: string) {
	return `${process.env.SITE_URL}/api/draft?uri=${path}&token=${process.env.PAYLOAD_PREVIEW_TOKEN}`
}
