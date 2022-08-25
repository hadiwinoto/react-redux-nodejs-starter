module.exports = (connectMysql,Sequelize) => {
  const User = connectMysql.define("users", {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nama: {
        type: Sequelize.TEXT
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  return User;
};