module.exports = (sequelize, Sequelize) => {
    const TypeOfEmployment = sequelize.define("typesOfEmployment", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return TypeOfEmployment;
};