module.exports = (connectMysql, Sequelize) => {
  const role = connectMysql.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return role;
};