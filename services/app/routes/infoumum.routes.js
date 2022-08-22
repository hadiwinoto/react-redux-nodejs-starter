const { authJwt } = require("../middleware");
const controller = require("../controllers/infoumum.controller");

module.exports = function(app) {
  
  var router = require("express").Router();
  router.post("/infoumum",controller.submitData);

  app.use('/api',[authJwt.verifyToken], router);
  
};
