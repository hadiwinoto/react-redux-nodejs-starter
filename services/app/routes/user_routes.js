const verifySignUp  = require("../middleware/verifySignUp");
const authJwt  = require("../middleware/authJwt");
const controller = require("../controllers/UserController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/user/create",[authJwt.verifyToken],controller.crateNewUser);
  app.get("/api/user/getall",[authJwt.verifyToken],controller.getAll);

};