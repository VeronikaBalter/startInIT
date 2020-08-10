module.exports = (sequelize, Sequelize) => {
    const Resume = sequelize.define("resume", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING  
      },
      typeOfEmploymentId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      about:{
        type: Sequelize.STRING  
      },
      salary:{
        type: Sequelize.INTEGER
      },
      isModerationPassed:{
        type: Sequelize.BOOLEAN
      }

      
    });
  
    return Resume;
  };