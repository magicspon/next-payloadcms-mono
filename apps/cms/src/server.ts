import express from 'express'
import payload from 'payload'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
require('dotenv').config({ path: '.env' })

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
	res.redirect('/admin')
})

const start = async () => {
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET!,
		express: app,
		onInit: () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
		},
	})

	// Add your own express routes here

	app.listen(3030)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start()
