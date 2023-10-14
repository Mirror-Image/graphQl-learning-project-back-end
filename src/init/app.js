import express from 'express'
import session from 'express-session'
import { corsOptions, sessionOptions } from './config'
import cors from 'cors'
import { readToken } from './readToken'

const app = express()

app.use(session(sessionOptions))
app.use(cors(corsOptions))
app.use(readToken)

export { app }
