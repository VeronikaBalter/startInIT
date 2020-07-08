module.exports = (sequelize, Sequelize) => {
    const TypeOfEmployment = sequelize.define("typesOfEmployment", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return TypeOfEmployment;
};