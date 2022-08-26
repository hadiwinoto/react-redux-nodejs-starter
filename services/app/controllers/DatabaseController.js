const db = require("../models");
const Hotel = db.hotel;

exports.getAll = (req,res) => {

  const nama = req.query.nama;
  var condition = nama ? { nama: { [Op.iLike]: `%${nama}%` } } : null;
  Hotel.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.getByid =  (req,res) => {
  Hotel.findBypk().then(data => {
      res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      messege : err.messege || "Something Went Wrong"
    });
  });
};