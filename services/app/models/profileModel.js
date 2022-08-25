module.exports = (connectMysql,Sequelize) => {
  const Profile = connectMysql.define("profiles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
    });
  return Profile;
};