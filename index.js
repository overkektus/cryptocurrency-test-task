const express = require('express')
const { router: exchangeRateRouter } = require('./routes/exchangeRate.routes')

const app = express()

app.use('/api', exchangeRateRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
