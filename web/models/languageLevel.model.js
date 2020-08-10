module.exports = (sequelize, Sequelize) => {
    const LanguageLevel = sequelize.define("languageLevels", {
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
    
      return LanguageLevel;
    };