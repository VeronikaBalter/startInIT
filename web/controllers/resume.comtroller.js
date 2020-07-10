const db = require("../models");

exports.getResume = (req, res) => {
    db.resume.findAll().then((result )=>{
        res.status(200).send(result);
    })
    
};

exports.addResume = (req, res) => {
    
};

exports.getResumeById = (req, res) => {
    
};