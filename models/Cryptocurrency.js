module.exports = (sequelize, type) => {
  return sequelize.define('cryptocurrency', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    symbol: type.STRING,
  })
}
