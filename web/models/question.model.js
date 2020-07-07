module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      testId:{
        type: Sequelize.INTEGER,
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