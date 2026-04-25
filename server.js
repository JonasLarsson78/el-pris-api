import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { rootRoute } from './router/rootRoute.js'
import { elRoute } from './router/elPrice.js'

const PORT = 3000

const server = express()

//Middlewares
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

//Routes
server.use(rootRoute)
server.use('/api/v1', elRoute)

// Dev Server
server.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`)
})
