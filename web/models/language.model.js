module.exports = (sequelize, Sequelize) => {
    const Language = sequelize.define("languages", {
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
  
    return Language;
};