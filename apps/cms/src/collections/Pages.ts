import type { CollectionConfig } from 'payload/types'
import { RichText } from '../fields/RichText'
import { slugField } from '../fields/slugField'
import { populatePublishedDate } from '../utils/populatePublishedDate'
import { populateSlugField } from '../utils/populateSlugField'
import { isLoggedIn } from '../access/isLoggedIn'
import { isAdminOrHasSiteAccess } from '../access/isAdminOrHasSiteAccess'
import { isAdminOrHasSiteAccessOrPublished } from '../access/isAdminOrHasSiteAccessOrPublished'
import { isAdmin } from '../access/isAdmin'

const Pages: CollectionConfig = {
	slug: 'pages',
	labels: {
		plural: 'Pages',
		singular: 'Page',
	},
	admin: {
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
	},

	access: {
		// Anyone logged in can create
		create: isLoggedIn,
		// Only admins or editors with site access can update
		update: isAdminOrHasSiteAccess(),
		// Admins or editors with site access can read,
		// otherwise users not logged in can only read published
		read: isAdminOrHasSiteAccessOrPublished,
		// Only admins can delete
		delete: isAdmin,
	},
	hooks: {
		afterChange: [],
		afterRead: [],
		beforeChange: [populatePublishedDate, populateSlugField],
	},
	fields: [
		{
			type: 'text',
			name: 'title',
			required: true,
		},
		slugField('title'),
		{
			name: 'publishedDate',
			type: 'date',
			required: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			type: 'textarea',
			name: 'excerpt',
		},
		{
			type: 'richText',
			name: 'content',
			editor: RichText,
		},
	],
}

export default Pages
