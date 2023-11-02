/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
	collections: {
		pages: Page
		users: User
		teams: Team
		'payload-preferences': PayloadPreference
		'payload-migrations': PayloadMigration
	}
	globals: {
		home: Home
		about: About
		seo: Seo
	}
}
export interface Page {
	id: number
	title: string
	slug?: string | null
	publishedDate: string
	excerpt?: string | null
	blurb?: string | null
	content?:
		| {
				[k: string]: unknown
		  }[]
		| null
	parent?: (number | null) | Page
	breadcrumbs?:
		| {
				doc?: (number | null) | Page
				url?: string | null
				label?: string | null
				id?: string | null
		  }[]
		| null
	meta?: {
		title?: string | null
		description?: string | null
	}
	updatedAt: string
	createdAt: string
}
export interface User {
	id: number
	name?: string | null
	roles?: ('admin' | 'editor' | 'client')[] | null
	teams?: (number | Team)[] | null
	updatedAt: string
	createdAt: string
	email: string
	resetPasswordToken?: string | null
	resetPasswordExpiration?: string | null
	salt?: string | null
	hash?: string | null
	loginAttempts?: number | null
	lockUntil?: string | null
	password: string | null
}
export interface Team {
	id: number
	title: string
	users?:
		| {
				relationTo: 'users'
				value: number | User
		  }[]
		| null
	updatedAt: string
	createdAt: string
}
export interface PayloadPreference {
	id: number
	user: {
		relationTo: 'users'
		value: number | User
	}
	key?: string | null
	value?:
		| {
				[k: string]: unknown
		  }
		| unknown[]
		| string
		| number
		| boolean
		| null
	updatedAt: string
	createdAt: string
}
export interface PayloadMigration {
	id: number
	name?: string | null
	batch?: number | null
	updatedAt: string
	createdAt: string
}
export interface Home {
	id: number
	title?: string | null
	teaser: {
		blurb?: string | null
	}
	page: {
		content?:
			| {
					[k: string]: unknown
			  }[]
			| null
	}
	updatedAt?: string | null
	createdAt?: string | null
}
export interface About {
	id: number
	title?: string | null
	meta?: {
		title?: string | null
		description?: string | null
	}
	updatedAt?: string | null
	createdAt?: string | null
}
export interface Seo {
	id: number
	title?: string | null
	description?: string | null
	meta?: {
		title?: string | null
		description?: string | null
	}
	updatedAt?: string | null
	createdAt?: string | null
}

declare module 'payload' {
	export interface GeneratedTypes extends Config {}
}
