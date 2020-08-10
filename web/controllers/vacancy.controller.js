const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const {Op} = require("sequelize");

exports.getVacancies = async (req, res) => {
    try{
        let filterData ={};
        console.log(req.body)
        // if (req.body.search !== '') {
        //     filterData = {
        //       $or: [
        //         {name: {[Op.iLike]: '%' + req.body.search + '%'}},
        //       ]
        //     };
        // }
        let count = await db.vacancy.count();

        let vacancies = await db.vacancy.findAll({
            // where: {name: {[Op.iLike]: '%' + req.body.search + '%'}},
            offset: req.body.offset, 
            limit: req.body.limit,
            include: [
                { model: db.company, as: 'company'}
            ]
        });
        res.status(200).send({vacancies:vacancies,count: count});
    
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};

exports.addVacancy = async (req, res) => {
    //console.log(req.body)
    try{
        const vacancy = await db.vacancy.create({ 
            name: req.body.name,
            about: req.body.about,
            salaryStart: req.body.salaryStart,
            salaryEnd: req.body.salaryEnd,
            currencyId: req.body.currencyId,
            companyId: req.body.companyId,
            typesOfEmploymentId: req.body.typesOfEmploymentId,
            isModerationPassed: req.body.isModerationPassed,
            interviewSalary: req.body.interviewSalary,
        });
        // req.body.skills.forEach(async(element) => {
        //     await db.vacancySkill.create({
        //         vacancyId: vacancy.dataValues.id,
        //         skillId: element
        //     })
        // });
        res.sendStatus(200);
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
    
};


exports.getVacancyById = async (req, res) => {
    try{
        let vacancies = await db.vacancy.findOne({ 
            where: {id: req.params.id},
            include: [
                { model: db.company, as: 'company'}
            ]});
        res.status(200).send(vacancies);
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};

exports.getMyVacancies = async (req, res) => {
    try{
        let token = req.headers["x-access-token"];
        let userId = 0;
        jwt.verify(token, config.secret, (err, decoded) => { userId = decoded.id; });
        let count = await db.vacancy.count({include: [
            { model: db.company, as: 'company',
            where: {ownerId: userId},}
        ]});
        let vacancies = await db.vacancy.findAll({ 
            include: [
                { model: db.company, as: 'company',
                where: {ownerId: userId},}
            ]});
        res.status(200).send({vacancies:vacancies,count: count});
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};