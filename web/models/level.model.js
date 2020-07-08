module.exports = (sequelize, Sequelize) => {
    const Level = sequelize.define("levels", {
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
  
    return Level;
};