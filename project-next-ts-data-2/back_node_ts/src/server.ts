import express from 'express'
import dotenv from 'dotenv'
import { connectionDB } from './config/connection'
import routers from './routes/routes'
dotenv.config()
connectionDB()
const app = express()

app.use(express.json())
app.use('/api/data',routers)

export default app