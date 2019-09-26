const express = require('express')
const router = express.Router()
const ExchangeRateController = require('../controllers/exchangeRate.controller')

router.get('/latest', (req, res) => {
  ExchangeRateController.getLatest(req, res)
})

router.get('/symbols', (req, res) => {
  ExchangeRateController.getSymbols(req, res)
})

router.post('/add', (req, res) => {
  ExchangeRateController.add(req, res)
})

module.exports = {
  router,
}
