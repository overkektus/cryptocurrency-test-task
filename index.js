const express = require('express')
const bodyParser = require('body-parser')
const { router: exchangeRateRouter } = require('./routes/exchangeRate.routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))
app.use('/api', exchangeRateRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`Server started on port ${PORT}`))
