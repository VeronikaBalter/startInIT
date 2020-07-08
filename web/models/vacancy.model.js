module.exports = (sequelize, Sequelize) => {
    const Vacancy = sequelize.define("vacancies", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      typeOfEmploymentId:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      about:{
        type: Sequelize.STRING(1000),
        allowNull: false,  
      },
      salaryStart:{
        type: Sequelize.INTEGER
      },
      salaryEnd:{
        type: Sequelize.INTEGER
      },
      
      
    });
  
    return Vacancy;
  };