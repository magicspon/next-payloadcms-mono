import path from 'path'
import express from 'express'
import payload from 'payload'

require('dotenv').config({ path: path.join(__dirname, '../', '.env') })

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

start()
