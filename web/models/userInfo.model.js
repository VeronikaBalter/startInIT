module.exports = (sequelize, Sequelize) => {
    const UserInfo = sequelize.define("usersInfo", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      phoneNumber:{
        type: Sequelize.STRING
      },
      dateOfBirth:{
        type: Sequelize.DATE
      },
      country:{
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING
      },
      skype:{
        type: Sequelize.STRING
      },
      facebook:{
        type: Sequelize.STRING
      },
      instagram:{
        type: Sequelize.STRING
      },
      linkedin:{
        type: Sequelize.STRING
      },
      twitter:{
        type: Sequelize.STRING
      },
      
      
    });
  
    return UserInfo;
  };