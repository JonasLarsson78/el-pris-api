import { Router } from 'express'
const rootRoute = Router()

rootRoute.get('/', (req, res) => {
  res.json({
    message: 'El Pris API',
    version: '1.0.0',
    status: 'ok',
    timestamp: new Date().toISOString(),
    description: 'Hämtar elpriser per kvart från elprisetjustnu.se',
    endpoints: [
      {
        path: '/api/v1/el',
        method: 'GET',
        description: 'Hämtar elpriser för ett givet datum och zon',
        query: {
          year: 'År (standard: innevarande år)',
          date: 'Datum i format MM-DD (standard: dagens datum)',
          zone: 'Priszon: SE1, SE2, SE3, SE4 (standard: SE4)',
        },
        example: '/api/v1/el?year=2026&date=04-25&zone=SE3',
      },
    ],
  })
})

export { rootRoute }
