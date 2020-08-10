const db = require("../models");
const Sequelize = require("sequelize");

exports.getTests = async (req, res) => {
    try{
    let tests;
    let count = 0;
    let filterData ={};
    let filterSkill ={};
    console.log(req.body)
    if (req.body.search !== '') 
        filterData.name = {[Sequelize.Op.like]: '%' + req.body.search + '%'};

    if(req.body.levelId>0)
        filterData.levelId = req.body.levelId;
    
    if(req.body.languageId>0)
        filterData.levelId = req.body.levelId;
    if(req.body.skills.length>0)
        filterSkill.id = {[Sequelize.Op.or]: req.body.skills}
    

    await db.test.count({
            where: filterData,
        })
        .then((data)=>{
            count = data;
        })
    await db.test.findAll({
        where: filterData,
        offset: req.body.offset, 
        limit: req.body.limit,
        order: [['createdAt', 'DESC']],
        // attributes: { 
        //     include: [[Sequelize.fn("COUNT", Sequelize.col("question.id")), "questionCount"]] 
        // },
        include: [
            { model: db.skill, 
                as: 'testSkills', 
                // where: filterSkill
            },
            { model: db.user, 
                as: 'user',
                attributes:[ 'firstName','lastName'],
                include:[{ model: db.userInfo, 
                    as: 'userInfo',
                    attributes:[ 'photo'],}]},
            {model: db.question, 
                as: "questions",
                attributes:['id']}
        ]
    }).then((resultTest) => {
        tests = resultTest;
    });
    
    res.status(200).send({tests:tests, count: count});
    }catch(error){
        console.log(error);
        res.sendStatus(500)
    }
};

exports.addTest = async (req, res) => {
    try{
        let test = await db.test.create({ 
            name: req.body.name,
            description: req.body.description,
            photo: req.body.photo,
            hour: req.body.hour,
            minutes: req.body.minutes,
            languageId: req.body.languageId,
            levelId: req.body.levelId,
            userId: req.body.userId,
        })
        for(let skillId of req.body.skills){
            console.log(skillId)
            await db.testSkill.create({
                skillId: skillId,
                testId: test.dataValues.id
            })
        }

        for(let question of req.body.questions){
            let questionRes = await db.question.create({
                testId: test.dataValues.id,
                text: question.name,
                photo: question.photo,
            })
            for(let answer of question.answers){
                await db.answer.create({
                    questionId: questionRes.dataValues.id,
                    text: answer.name,
                    right: answer.isRight,
                    photo: answer.photo,
                })
            }
        }
        res.sendStatus(200)
    }    
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
    
};

exports.getTest = async (req, res) => {
    try{
        await db.test.findOne({
            where: {id: req.params.testId},
            include: [
                { model: db.skill, 
                    as: 'testSkills', 
                },
                { model: db.user, 
                    as: 'user',
                    attributes:[ 'firstName','lastName'],
                    include:[{ model: db.userInfo, 
                        as: 'userInfo',
                        attributes:[ 'photo'],}]},
                {model: db.question, 
                    as: "questions",
                    include:[{ model: db.answer, 
                        as: 'answers',
                        attributes:['id', 'text']
                    }]
                },
                    
            ]
        })
        .then((test) => {
            if(test==null)
                res.sendStatus(404);
            res.status(200).send(test);
        })
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
    
};