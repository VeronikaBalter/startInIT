const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.userInfo = require("../models/userInfo.model.js")(sequelize, Sequelize);
db.test = require("../models/test.model.js")(sequelize, Sequelize);
db.language = require("../models/language.model.js")(sequelize, Sequelize);
db.level = require("../models/level.model.js")(sequelize, Sequelize);
db.question = require("../models/question.model.js")(sequelize, Sequelize);
db.answer = require("../models/answer.model.js")(sequelize, Sequelize);
db.company = require("../models/answer.model.js")(sequelize, Sequelize);
db.resume = require("../models/resume.model.js")(sequelize, Sequelize);
db.education = require("../models/education.model.js")(sequelize, Sequelize);
db.levelOfEducation = require("../models/levelOfEducation.model.js")(sequelize, Sequelize);
db.skill = require("../models/skill.model.js")(sequelize, Sequelize);
db.workExperience = require("../models/workExperience.model.js")(sequelize, Sequelize);
db.typeOfEmployment = require("../models/typeOfEmployment.model.js")(sequelize, Sequelize);
db.vacancy = require("../models/vacancy.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "userRoles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "userRoles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.language.hasMany(db.test, { as: "test" });
db.test.belongsTo(db.language, {
    foreignKey: "languageId",
    as: "language",
});

db.level.hasMany(db.test, { as: "test" });
db.test.belongsTo(db.level, {
    foreignKey: "levelId",
    as: "level",
});

db.test.hasMany(db.question, { as: "question" });
db.question.belongsTo(db.test, {
    foreignKey: "testId",
    as: "test",
}); 

db.question.hasMany(db.answer, { as: "answer" });
db.answer.belongsTo(db.question, {
    foreignKey: "questionId",
    as: "question",
}); 

db.company.belongsTo(db.user, {
    foreignKey: "ownerId",
    as: "user",
}); 

db.userInfo.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
}); 

db.resume.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
}); 

db.education.belongsToMany(db.resume, {
    through: "resumeEducation",
    foreignKey: "educationId",
    otherKey: "resumeId"
});
db.resume.belongsToMany(db.education, {
    through: "resumeEducation",
    foreignKey: "resumeId",
    otherKey: "educationId"
});

db.levelOfEducation.hasMany(db.education, { as: "education" });
db.education.belongsTo(db.levelOfEducation, {
    foreignKey: "levelOfEducationId",
    as: "levelOfEducation",
}); 

db.skill.belongsToMany(db.test, {
    through: "testSkill",
    foreignKey: "skillId",
    otherKey: "testId"
});
db.test.belongsToMany(db.skill, {
    through: "testSkill",
    foreignKey: "testId",
    otherKey: "skillId"
});

db.resume.belongsToMany(db.language, {
    through: "resumeLanguage",
    foreignKey: "resumeId",
    otherKey: "languageId"
});
db.language.belongsToMany(db.resume, {
    through: "resumeLanguage",
    foreignKey: "languageId",
    otherKey: "resumeId"
});

db.workExperience.belongsToMany(db.resume, {
    through: "resumeWorkExperience",
    foreignKey: "workExperienceId",
    otherKey: "resumeId"
});
db.resume.belongsToMany(db.workExperience, {
    through: "resumeWorkExperiencen",
    foreignKey: "resumeId",
    otherKey: "workExperienceId"
});

db.typeOfEmployment.hasMany(db.vacancy, { as: "education" });
db.vacancy.belongsTo(db.typeOfEmployment, {
    foreignKey: "typeOfEmploymentId",
    as: "typeOfEmployment",
});    

db.vacancy.belongsTo(db.company, {
    foreignKey: "companyId",
    as: "company",
});

db.ROLES = ["user", "admin"];
// db.LANGUAGES = ["English", "Russian", "Ukrainian", "French", "Spanish", "Arab", "Portuguese", "German", "Chinese"];
// db.LEVELS = ["Junior","Middle", "Senior"];
// db.LEVELSOFEDUCATION = ["Higher", "Incomplete higher","Specialized secondary","Secondary"];
// db.SLIKKS = ["A.NET","A-0 System","A+","ABAP","ABC","ABC ALGOL","ACC","Accent","Ace DASL (Distributed Application Specification Language)","Action!",
//     "ActionScript","Actor","Ada","Adenine","Agda","Agilent VEE","Agora","AIMMS","Aldor","Alef","ALF","ALGOL 58","ALGOL 60","ALGOL 68","ALGOL W","Alice",
//     "Alma-0","AmbientTalk","Amiga E","AMOS","AMPL","AngelScript","Apex","APL","App Inventor for Android's visual block language","AppleScript","APT",
//     "Arc","ARexx","Argus","Assembly language","AutoHotkey","AutoIt","AutoLISP / Visual LISP","Averest","AWK","Axum"];

module.exports = db;