require('dotenv').config()
const axios = require('axios')
const { Cryptocurrency, ExchangeRate } = require('../sequelize')

const URL = 'https://api.hitbtc.com/api/2/public/ticker'

axios
  .get(URL)
  .then(({ data }) => {
    return data
  })
  .then(data => {
    Cryptocurrency.findAll()
      .then(cr => {
        if (cr.length === 0) {
          const cryptoSymbols = data.map(val => ({ symbol: val.symbol }))
          Cryptocurrency.bulkCreate(cryptoSymbols)
        }
        return
      })
      .then(() => {
        const rate = data.map((val, i) => {
          return {
            cryptocurrencyId: i + 1,
            timestamp: val.timestamp,
            last: val.last,
          }
        })
        ExchangeRate.bulkCreate(rate)
      })
  })
  .catch(error => {
    console.log(error)
  })
