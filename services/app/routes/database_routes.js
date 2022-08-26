module.exports = (app) => {

  const controller = require("../controllers/DatabaseController");
  const { authJwt } = require("../middleware");
 
  var router = require("express").Router();

  router.get("/database/hotel",controller.getAll);


  
 
  app.use('/api',[authJwt.verifyToken], router)
 };

