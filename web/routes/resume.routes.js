const controller = require("../controllers/resume.controller");

module.exports = function(app) {
    
  app.post('/api/getResumes',controller.getResumes);

  app.post('/api/getResumeById/:id',controller.getResumeById);

  app.post('/api/getMyResumes',controller.getMyResumes);

  app.post('/api/addResume', controller.addResume);
  
};