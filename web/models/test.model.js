module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("tests", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      photo:{
        type: Sequelize.STRING
      },
      levelId: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Test;
};