module.exports = (sequelize, Sequelize) => {
    const LevelOfEducation = sequelize.define("levelsOfEducation", {
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
  
    return LevelOfEducation;
  };