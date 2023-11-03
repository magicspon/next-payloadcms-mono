import type { Access } from 'payload/config'
import type { User } from '../payload-types'

export const isAdminOrHasSiteAccess =
	(siteIDFieldName = 'team'): Access<any, User> =>
	({ req: { user } }) => {
		// Need to be logged in
		if (user) {
			// If user has role of 'admin'
			if (user.roles?.includes('admin')) return true

			// If user has role of 'editor' and has access to a site,
			// return a query constraint to restrict the documents this user can edit
			// to only those that are assigned to a site, or have no site assigned
			if (
				user.roles?.includes('editor') &&
				user.teams &&
				user.teams.length > 0
			) {
				// Otherwise, we can restrict it based on the `site` field
				return {
					or: [
						{
							[siteIDFieldName]: {
								in: user.teams,
							},
						},
						{
							[siteIDFieldName]: {
								exists: false,
							},
						},
					],
				}
			}
		}

		// Reject everyone else
		return false
	}
