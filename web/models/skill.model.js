module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skils", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Skill;
};