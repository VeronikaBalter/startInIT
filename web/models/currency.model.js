module.exports = (sequelize, Sequelize) => {
const Currency = sequelize.define("currencies", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Currency;
};