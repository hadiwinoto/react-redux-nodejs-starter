const { authJwt } = require("../middleware");
const controller = require("../controllers/spesifikasi.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/spesifikasi",[authJwt.verifyToken],controller.submitData);
  app.get("/api/spesifikasi",[authJwt.verifyToken],controller.getData);
};