const db = require("../models");

exports.addCompany = async (req, res) => {
    try{
        console.log(req.body)
        await db.company.create(req.body);
        res.sendStatus(200);
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};


exports.getCompanyById = (req, res) => {
    
};