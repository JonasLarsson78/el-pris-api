//https://www.elprisetjustnu.se/api/v1/prices/2026/04-25_SE3.json

import { Router } from 'express'
import mapElData from '../utils/mapElData.js'

const elRoute = Router()

elRoute.get('/el', async (req, res) => {
  const now = new Date()
  const dateNow = now.getDate()
  const monthNow = now.getMonth() + 1
  const monthDate =
    monthNow.toString().padStart(2, '0') +
    '-' +
    dateNow.toString().padStart(2, '0')
  const yearNow = now.getFullYear()?.toString()

  const { year = yearNow, date = monthDate, zone = 'SE4' } = req.query

  try {
    const response = await fetch(
      `https://www.elprisetjustnu.se/api/v1/prices/${year}/${date}_${zone}.json`
    )
    const data = await response.json()
    res.json({ data: [mapElData(data)] })
  } catch (error) {
    res.json({ error })
  }
})

export { elRoute }
