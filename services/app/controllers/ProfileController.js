const db = require("../models");
const profile = db.profile;
const User = db.user;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  profile.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      messege : err.messege || "Something Went Wrong"
    });
  });
};

exports.userBoard = (req, res) => {
  profile.findOne(req.user_id).then(user => {
      res.status(200).send({
       user
      });
   });
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};