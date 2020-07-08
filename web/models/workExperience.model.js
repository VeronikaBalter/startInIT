module.exports = (sequelize, Sequelize) => {
    const WorkExperience = sequelize.define("worksExperience", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      country:{
        type: Sequelize.STRING,
        allowNull: false
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false
      },
      position:{
        type: Sequelize.STRING,
        allowNull: false
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false
      },
      dateStart:{
        type: Sequelize.DATE
      },
      dateEnd:{
        type: Sequelize.DATE
      },
      untilNow:{
        type: Sequelize.BOOLEAN
      }
    });
  
    return WorkExperience;
  };