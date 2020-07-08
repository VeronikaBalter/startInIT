module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("Companies", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING ,
        allowNull: false 
      },
      about:{
        type: Sequelize.STRING  
      },
      photo:{
        type: Sequelize.STRING  
      },
      country:{
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING
      },
      street:{
        type: Sequelize.STRING
      },
      house:{
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stateStart:{
        type: Sequelize.STRING
      },
      stateEnd:{
        type: Sequelize.STRING
      }

      
    });
  
    return Company;
  };