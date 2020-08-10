const controller = require("../controllers/vacancy.controller");

module.exports = function(app) {
    
  app.post('/api/getVacancies',controller.getVacancies);

  app.post('/api/getVacancyById/:id',controller.getVacancyById);

  app.post('/api/getMyVacancies',controller.getMyVacancies);

  app.post('/api/addVacancy', controller.addVacancy);
  
};