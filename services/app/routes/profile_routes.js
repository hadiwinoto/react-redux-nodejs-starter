module.exports = (app) => {

  const controller = require("../controllers/ProfileController");
  const { authJwt } = require("../middleware");
 
  var router = require("express").Router();
     router.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
  });

    router.get("/user/all",[authJwt.verifyToken],controller.allAccess);
    router.get("/user/user",[authJwt.verifyToken],controller.userBoard);
    router.get("/user/mod",[authJwt.verifyToken, authJwt.isModerator],controller.moderatorBoard);
    router.get("/user/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard);
 
    app.use('/api',[authJwt.verifyToken], router)
 };

