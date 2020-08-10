const controller = require("../controllers/company.controller");

module.exports = function(app) {
    
  app.post('/api/addCompany',controller.addCompany);
  
};