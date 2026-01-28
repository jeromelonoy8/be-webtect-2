import { serve } from '@hono/node-server'
import app from './index'

// Load environment variables
import { config } from 'dotenv'
config()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

console.log(`🚀 Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})