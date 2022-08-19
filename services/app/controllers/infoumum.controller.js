const db = require("../models");
const config = require("../config/auth.config");
const Infoumum = db.infoumum;

exports.submitData = (req, res) => {
    // Validate request
    if(!req.body) {
      res.status(400).send({
        status: false,
        message: "Content can not be empty!"
      });
      return;
    }
    const dataumum = {
        name : req.body.name,
        jenis : req.body.jenis,
        alamat : req.body.alamat,
        negara_pembuat : req.body.negara_pembuat
    }

    //store data
    Infoumum.create(dataumum).then(data => {
        res.send({
          status : true,
          data : data
        });
    })
    .catch(err => {
      res.status(500).send({
        status: false,
        message : err.message ||  "Some error occurred while creating the Data."
      });
    });

};
