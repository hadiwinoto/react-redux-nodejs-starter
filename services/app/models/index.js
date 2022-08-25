const dbConfig = require("../config/database.js");
const authJwt = require("../middleware/authJwt");
const verifySignUp = require("../middleware/verifySignUp");

const Sequelize = require("sequelize");
const connectMysql = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize    = Sequelize;
db.connectMysql = connectMysql;

db.user = require("../models/userModel.js")(connectMysql,Sequelize);
db.role = require("../models/roleModel.js")(connectMysql,Sequelize);
db.profile = require("../models/profileModel.js")(connectMysql,Sequelize);
db.dataumum = require("../models/dataUmumModel.js")(connectMysql,Sequelize);


db.role.belongsToMany(db.user, {
  through:    "user_roles",
  foreignKey: "role_id",
  otherKey:   "user_id"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id"
});

db.user.belongsToMany(db.profile, {
  through: "user_id",
  foreignKey: "user_id",
  otherKey: "id"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db,authJwt,verifySignUp