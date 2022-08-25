const db = require("../models");
const config = require("../config/auth");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const uuid = require('uuid');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.getAll = (req, res) => {
  User.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      messege : err.messege || "Something Went Wrong"
    });
  });
};

exports.crateNewUser = (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Username is already in use!"
        });
        return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
    }

    next();

    });

  User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
  });
};

  

