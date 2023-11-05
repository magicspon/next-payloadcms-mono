import type { Home } from 'cms/src/payload-types'
import { Heading } from 'ui/src/primitives/Heading'

export function HomePage({ page }: { page: Home }) {
	return (
		<main>
			<Heading>{page.title}</Heading>
		</main>
	)
}
