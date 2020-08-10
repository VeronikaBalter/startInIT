module.exports = (sequelize, Sequelize) => {
    const ResumeLanguageAndLevel = sequelize.define("resumeLanguagesAndLevel", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }

      
    });
  
    return ResumeLanguageAndLevel;
  };