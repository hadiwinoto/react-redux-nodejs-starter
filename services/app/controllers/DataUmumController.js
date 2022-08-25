const db = require("../models");
const config = require("../config/auth");
const Dataumum = db.dataumum;


exports.getAll = (req, res) => {
    Dataumum.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        messege : err.messege || "Something Went Wrong"
      });
    });
};