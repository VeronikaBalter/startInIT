module.exports = {
    HOST: "localhost",
    USER: "developer",
    PASSWORD: "123456",
    DB: "startInIT",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };