export function requireApiKey(req, res, next) {
  const key = req.headers['x-api-key']
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({
      error:
        "401 - Unauthorized - Missing header 'x-api-key: your-api-key-here' !",
    })
  }
  next()
}
