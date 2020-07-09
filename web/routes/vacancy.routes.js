const { authJwt } = require("../middleware");
const controller = require("../controllers/vacancy.controller");

module.exports = function(app) {
    
  app.get("/api/vacancies", controller.vacancies);
  
};