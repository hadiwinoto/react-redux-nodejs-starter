module.exports = app => {
  
  const { authJwt } = require("../middleware");
  const controller = require("../controllers/infoumum.controller");

  var router = require("express").Router();

  router.post("/infoumum",controller.submit);

  app.use("/api",[authJwt.verifyToken],router);

};
