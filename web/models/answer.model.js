module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answers", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      right:{
        type: Sequelize.BOOLEAN
      },
    });
  
    return Answer;
};