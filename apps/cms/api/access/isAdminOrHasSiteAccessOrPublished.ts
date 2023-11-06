import type { Access } from 'payload/config'
import type { User } from '../payload-types'

export const isAdminOrHasSiteAccessOrPublished: Access<any, User> = ({
	req: { user },
}) => {
	// Need to be logged in
	if (user) {
		// If user has role of 'admin'
		if (user.roles?.includes('admin')) return true

		// If user has role of 'editor' and has access to a site,
		// return a query constraint to restrict the documents this user can edit
		// to only those that are assigned to a site, or have no site assigned
		if (user.roles?.includes('editor') && user.teams && user.teams.length > 0) {
			return {
				or: [
					{
						team: {
							in: user.teams,
						},
					},
					{
						team: {
							exists: false,
						},
					},
				],
			}
		}
	}

	// Non-logged in users can only read published docs
	return false
}
