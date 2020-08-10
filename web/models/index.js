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
db.company = require("../models/company.model.js")(sequelize, Sequelize);
db.resume = require("../models/resume.model.js")(sequelize, Sequelize);
db.education = require("../models/education.model.js")(sequelize, Sequelize);
db.levelOfEducation = require("../models/levelOfEducation.model.js")(sequelize, Sequelize);
db.skill = require("../models/skill.model.js")(sequelize, Sequelize);
db.workExperience = require("../models/workExperience.model.js")(sequelize, Sequelize);
db.typeOfEmployment = require("../models/typeOfEmployment.model.js")(sequelize, Sequelize);
db.vacancy = require("../models/vacancy.model.js")(sequelize, Sequelize);
db.currency = require("../models/currency.model.js")(sequelize, Sequelize);
db.languageLevel = require("../models/languageLevel.model.js")(sequelize, Sequelize);
db.resumeLanguageAndLevel = require("./resumeLanguageAndLevel.model.js")(sequelize, Sequelize);

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

db.level.hasMany(db.resume, { as: "resume" });
db.resume.belongsTo(db.level, {
    foreignKey: "levelId",
    as: "level",
});

db.currency.hasMany(db.resume, { as: "resume" });
db.resume.belongsTo(db.currency, {
    foreignKey: "currencyId",
    as: "currency",
});

db.currency.hasMany(db.vacancy, { as: "vacancy" });
db.vacancy.belongsTo(db.currency, {
    foreignKey: "currencyId",
    as: "currency",
});

db.test.hasMany(db.question, { as: "questions" });
db.question.belongsTo(db.test, {
    foreignKey: "testId",
    as: "test",
}); 

db.question.hasMany(db.answer, { as: "answers" });
db.answer.belongsTo(db.question, {
    foreignKey: "questionId",
    as: "question",
}); 

db.user.hasOne(db.company, {as: 'company', foreignKey : 'ownerId'});

db.user.hasOne(db.resume, {as: 'resume', foreignKey : 'userId'});

db.language.hasOne(db.resumeLanguageAndLevel, {as: 'resumeLanguageAndLevel', foreignKey : 'languageId'});

db.level.hasOne(db.resumeLanguageAndLevel, {as: 'resumeLanguageAndLevel', foreignKey : 'levelId'});

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
    foreignKey: "levelsOfEducationId",
    as: "levelsOfEducation",
}); 

db.skill.belongsToMany(db.test, {
    through: "testSkill",
    foreignKey: "skillId",
    otherKey: "testId",
    as: 'testSkills'
});
db.test.belongsToMany(db.skill, {
    through: "testSkill",
    foreignKey: "testId",
    otherKey: "skillId",
    as: 'testSkills'
});

db.skill.belongsToMany(db.test, {
    through: "vacancySkill",
    foreignKey: "skillId",
    otherKey: "vacancyId"
});
db.test.belongsToMany(db.skill, {
    through: "vacancySkill",
    foreignKey: "vacancyId",
    otherKey: "skillId"
});

db.skill.belongsToMany(db.test, {
    through: "resumeSkill",
    foreignKey: "skillId",
    otherKey: "resumeId"
});
db.resume.belongsToMany(db.skill, {
    through: "resumeSkill",
    foreignKey: "resumeId",
    otherKey: "skillId"
});

db.resume.belongsToMany(db.resumeLanguageAndLevel, {
    through: "resumeLanguage",
    foreignKey: "resumeId",
    otherKey: "resumeLanguageAndLevelId"
});
db.resumeLanguageAndLevel.belongsToMany(db.resume, {
    through: "resumeLanguage",
    foreignKey: "resumeLanguageAndLevelId",
    otherKey: "resumeId"
});

db.workExperience.belongsToMany(db.resume, {
    through: "resumeWorkExperience",
    foreignKey: "workExperienceId",
    otherKey: "resumeId"
});
db.resume.belongsToMany(db.workExperience, {
    through: "resumeWorkExperience",
    foreignKey: "resumeId",
    otherKey: "workExperienceId"
});

db.typeOfEmployment.hasMany(db.vacancy, { as: "vacancy" });
db.vacancy.belongsTo(db.typeOfEmployment, {
    foreignKey: "typesOfEmploymentId",
    as: "typeOfEmployment",
});    
db.typeOfEmployment.hasMany(db.resume, { as: "resume" });
db.resume.belongsTo(db.typeOfEmployment, {
    foreignKey: "typesOfEmploymentId",
    as: "typeOfEmployment",
});    

db.company.hasMany(db.vacancy, { as: "vacancy" });
db.vacancy.belongsTo(db.company, {
    foreignKey: "companyId",
    as: "company",
});

db.user.hasMany(db.test, { as: "test" });
db.test.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});

db.user.hasMany(db.userInfo, { as: "userInfo" });
db.userInfo.belongsTo(db.user, {
    foreignKey: "userId",
    as: "user",
});

module.exports = db;