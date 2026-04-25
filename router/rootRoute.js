import { Router } from 'express'
const rootRoute = Router()

rootRoute.get('/', (req, res) => {
  res.json({ message: 'Root Route' })
})

export { rootRoute }
