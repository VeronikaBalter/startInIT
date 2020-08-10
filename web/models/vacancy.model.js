module.exports = (sequelize, Sequelize) => {
    const Vacancy = sequelize.define("vacancies", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,  
      },
      about:{
        type: Sequelize.STRING(10000),
        allowNull: false,  
      },
      salaryStart:{
        type: Sequelize.INTEGER
      },
      salaryEnd:{
        type: Sequelize.INTEGER
      },
      interviewSalary:{
        type: Sequelize.BOOLEAN
      },
      isModerationPassed:{
        type: Sequelize.BOOLEAN
      }
      
      
    });
  
    return Vacancy;
  };