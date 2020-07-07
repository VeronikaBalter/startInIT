module.exports = (sequelize, Sequelize) => {
    const UserInfo = sequelize.define("usersInfo", {
      id: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      phoneNumber:{
        type: Sequelize.STRING
      },
      dateOfBirth:{
        type: Sequelize.DATE
      },
      city:{
        type: Sequelize.STRING
      },
      country:{
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