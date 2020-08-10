module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("companies", {
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
        type: Sequelize.INTEGER
      },
      stateEnd:{
        type: Sequelize.INTEGER
      }

      
    });
    return Company;
  };