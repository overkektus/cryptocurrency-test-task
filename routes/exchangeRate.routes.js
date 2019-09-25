const express = require('express')
const router = express.Router()
const ExchangeRateController = require('../controllers/exchangeRate.controller')

router.get('/latest', (req, res) => {
  ExchangeRateController.getLatest(req, res)
})

module.exports = {
  router,
}
