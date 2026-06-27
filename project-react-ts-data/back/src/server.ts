import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/routes'
import { connectDB } from './config/connection'
import { corsConfig } from './config/cros'
dotenv.config()
connectDB()
const app = express()
app.use(cors(corsConfig))
app.use(express.json())
app.use('/api/company',routes )
app.use('/api/salary',routes )
app.use('/api/location',routes )
app.use('/api/fact',routes )

export default app