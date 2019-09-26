const { Cryptocurrency, ExchangeRate } = require('../sequelize')

const ExchangeRateController = {}

ExchangeRateController.getLatest = (req, res) => {
  Promise.all([
    new Promise(resolve => {
      Cryptocurrency.findAll({
        attributes: ['id', 'symbol'],
      }).then(data => {
        const symbols = data.map(val => val.dataValues)
        resolve(symbols)
      })
    }),

    new Promise(resolve => {
      ExchangeRate.findAll({
        order: [['id', 'DESC']],
        attributes: ['id', 'cryptocurrencyId', 'last', 'timestamp'],
        limit: 901,
      }).then(data => {
        const exchangeRate = data.map(val => val.dataValues).reverse()
        resolve(exchangeRate)
      })
    }),
  ]).then(values => {
    const symbols = values[0]
    const exchangeRate = values[1]

    const result = []
    for (let i = 0; i < symbols.length; i++) {
      result.push({
        ...exchangeRate[i],
        symbol: symbols[i].symbol,
      })
    }
    return res.send(result)
  })
}

ExchangeRateController.getSymbols = (req, res) => {
  Cryptocurrency.findAll({ attributes: ['id', 'symbol'] })
    .then(data => {
      return res.send(data)
    })
    .catch(error => {
      console.log(error)
      return res.sendStatus(500)
    })
}

ExchangeRateController.add = (req, res) => {
  const {
    body: { value, userId, cryptocurrencyId },
  } = req
  ExchangeRate.create({ last: +value, cryptocurrencyId, userId, timestamp: new Date().toISOString() })
    .then(rate => {
      return res.status(201).send(rate.dataValues)
    })
    .catch(error => {
      console.log(error)
      return res.sendStatus(500)
    })
}

module.exports = ExchangeRateController
