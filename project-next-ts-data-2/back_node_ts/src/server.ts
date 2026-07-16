import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectionDB } from './config/connection'
import routers from './routes/routes'
import { corsConfig } from './config/cors'
dotenv.config()

connectionDB()
const app = express()
app.use(cors(corsConfig))


app.use(express.json())
app.use('/api/data',routers)

export default app