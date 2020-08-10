const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");

exports.currentUser = async (req, res) => {
  try{
    let token = req.headers["x-access-token"];
    let userId = 0;
    jwt.verify(token, config.secret, (err, decoded) => { userId = decoded.id; });
    let user = await db.user.findOne({
      where: { id: userId },
      include: [
        { model: db.role, as: 'roles'}
      ]});
    if (!user) 
      return res.sendStatus(404);
      
    return res.status(200).send(user);
  }catch(error){
    return res.sendStatus(500);
  }
};
  // exports.allAccess = (req, res) => {
  //   res.status(200).send("Public Content.");
  // };
  // exports.userBoard = (req, res) => {
  //   res.status(200).send("User Content.");
  // };
  
  // exports.adminBoard = (req, res) => {
  //   res.status(200).send("Admin Content.");
  // };
  
  // exports.moderatorBoard = (req, res) => {
  //   res.status(200).send("Moderator Content.");
  // };