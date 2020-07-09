const db = require("../models");

exports.vacancies = (req, res) => {
    db.vacancy.findAll().then((result )=>{
        res.status(200).send(result);
    })
    
};