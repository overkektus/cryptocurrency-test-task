require('dotenv').config()
const Sequelize = require('sequelize')
const CryptocurrencyModel = require('./models/Cryptocurrency')
const ExchangeRateModel = require('./models/ExchangeRate')

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_LOGIN, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

const Cryptocurrency = CryptocurrencyModel(sequelize, Sequelize)
const ExchangeRate = ExchangeRateModel(sequelize, Sequelize)

ExchangeRate.belongsTo(Cryptocurrency, { constraints: false })

sequelize.sync({ alter: true }).then(() => {
  console.log(`Database & tables created!`)
})

module.exports = {
  Cryptocurrency,
  ExchangeRate,
}
