const db = require("../models");
const config = require("../config/auth.config");

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try{
    let user  = await db.user.findOne({ where: { email:req.body.user.email}})
    if(user!=null)
      return res.sendStatus(409);

    user = await db.user.create({
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      email: req.body.user.email,
      password: bcrypt.hashSync(req.body.user.password, 8)
    })
      
    if (req.body.user.roles) {
      let roles = await db.role.findAll({where: { name: { [Op.or]: req.body.user.roles }}})
      user.setRoles(roles);
    } else 
      user.setRoles([1]);

    var token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400}); // 24 hours
      return res.status(200).send(token);
  }catch(error){
    console.log(error)
    return res.sendStatus(500);
  }
};

exports.signin = async (req, res) => {
  try{
    let user = await db.user.findOne({ where: { email: req.body.user.email }})
    if (!user) 
      return res.sendStatus(404);
    var passwordIsValid = bcrypt.compareSync(req.body.user.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send(null);
      var token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400}); // 24 hours
      return res.status(200).send(token);
  }catch(error){
    console.log(error)
    return res.sendStatus(500)
  }
};