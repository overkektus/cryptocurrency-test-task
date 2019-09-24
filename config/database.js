const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.DATABASE, process.env.DB_LOGIN, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})
