

module.exports = app => {
  const { authJwt } = require("../middleware");
  const controller = require("../controllers/infoumum.controller");

  var router = require("express").Router();

  router.post("/api/infoumum",controller.submit);

  app.use("/api/infoumum",[authJwt.verifyToken,],router);
  
};
