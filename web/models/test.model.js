module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("tests", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(10000)
      },
      photo:{
        type: Sequelize.STRING
      },
      hour:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      minutes:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  
    return Test;
};