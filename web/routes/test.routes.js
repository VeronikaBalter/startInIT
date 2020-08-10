const controller = require("../controllers/test.controller");

module.exports = function(app) {
    
  app.post('/api/getTests',controller.getTests);

  app.post('/api/addTest', controller.addTest);

  app.get('/api/getTest/:testId', controller.getTest);
  
};