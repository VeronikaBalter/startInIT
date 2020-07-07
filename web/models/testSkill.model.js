module.exports = (sequelize, Sequelize) => {
    const TestSkill = sequelize.define("testSkills", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      testId: {
        type: Sequelize.INTEGER,
      },
      skillId: {
        type: Sequelize.INTEGER,
      },
    });
  
    return TestSkill;
};