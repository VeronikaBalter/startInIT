module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {
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
  
    return Skill;
};