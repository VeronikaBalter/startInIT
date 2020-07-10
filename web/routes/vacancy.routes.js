const controller = require("../controllers/vacancy.controller");

module.exports = function(app) {
    
  app.get('api/getVacancies',controller.getVacancies);
  
};