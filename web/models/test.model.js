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
        type: Sequelize.STRING
      },
      photo:{
        type: Sequelize.STRING
      },
    });
  
    return Test;
};