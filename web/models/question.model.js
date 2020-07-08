module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      testId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      text: {
        type: Sequelize.STRING
      },
      photo:{
        type: Sequelize.STRING
      }
    });
  
    return Question;
};