module.exports = (app) => {

  const controller = require("../controllers/DataUmumController");
  const { authJwt } = require("../middleware");
 
  var router = require("express").Router();
     router.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
  });

    router.get("/dataumum/alldata",controller.getAll);
 
    app.use('/api',[authJwt.verifyToken], router)
 };

