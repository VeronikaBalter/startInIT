module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("educations", {
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
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING
      },
      facultySpecialty:{
        type: Sequelize.STRING,
        allowNull: false
      },
      description:{
        type: Sequelize.STRING
      },
      dateStart:{
        type: Sequelize.DATE,
        allowNull: false
      },
      dateEnd:{
        type: Sequelize.DATE,
        allowNull: false
      },
      
    });
  
    return Education;
  };