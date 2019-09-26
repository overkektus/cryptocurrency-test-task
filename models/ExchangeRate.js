module.exports = (sequelize, type) => {
  return sequelize.define('exchangeRate', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    timestamp: type.DATE,
    last: type.FLOAT,
    userId: type.STRING,
  })
}
