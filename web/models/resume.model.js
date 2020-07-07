module.exports = (sequelize, Sequelize) => {
    const Resume = sequelize.define("resume", {
      id: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      typeOfEmploymentId:{
        type: Sequelize.INTEGER
      },
      about:{
        type: Sequelize.STRING  
      },

      
    });
  
    return Resume;
  };