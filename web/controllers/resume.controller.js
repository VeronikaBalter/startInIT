const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const {Op} = require("sequelize");

exports.getResumes = async (req, res) => {
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
        let count = await db.resume.count();

        let resumes = await db.resume.findAll({
            // where: {name: {[Op.iLike]: '%' + req.body.search + '%'}},
            offset: req.body.offset, 
            limit: req.body.limit,
            // include: [
            //     { model: db.company, as: 'company'}
            // ]
        });
        res.status(200).send({resumes:resumes,count: count});
    
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};

exports.addResume = async (req, res) => {
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


exports.getResumeById = async (req, res) => {
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

exports.getMyResumes = async (req, res) => {
    try{
        let token = req.headers["x-access-token"];
        let userId = 0;
        jwt.verify(token, config.secret, (err, decoded) => { userId = decoded.id; });
        let count = await db.resume.count({include: [
            { model: db.user, as: 'company',
            where: {ownerId: userId},}
        ]});
        let resumes = await db.resume.findAll({ 
            include: [
                { model: db.user, as: 'user',
                where: {authorId: userId},}
            ]});
        res.status(200).send({resumes:resumes,count: count});
    }catch(error){
        console.log(error)
        res.sendStatus(500);
    }
};