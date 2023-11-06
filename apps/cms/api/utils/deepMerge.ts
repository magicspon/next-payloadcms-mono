export function isObject(item: unknown): boolean {
	// eslint-disable-next-line no-implicit-coercion
	return !!item && typeof item === 'object' && !Array.isArray(item)
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
type InputParam = Record<string, any> | { [k: string]: any }

export default function deepMerge<T extends InputParam, R extends InputParam>(
	target: T,
	source: R,
): T {
	const output = { ...target }
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach((key) => {
			if (isObject(source[key])) {
				if (!(key in target)) {
					Object.assign(output, { [key]: source[key] })
				} else {
					output[key] = deepMerge(target[key], source[key])
				}
			} else {
				Object.assign(output, { [key]: source[key] })
			}
		})
	}

	return output
}
