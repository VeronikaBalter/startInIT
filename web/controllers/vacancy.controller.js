const db = require("../models");

exports.getVacancies = (req, res) => {
    db.vacancy.findAll().then((result )=>{
        res.status(200).send(result);
    })
    
};

// exports.addVacancy = (req, res) => {
    
// };


// exports.getVacancyById = (req, res) => {
    
// };