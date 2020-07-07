module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      questionId: {
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING
      },
      right:{
        type: Sequelize.BOOLEAN
      },
    });
  
    return Question;
};