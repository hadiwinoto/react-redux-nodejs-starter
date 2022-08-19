module.exports = (sequelize, Sequelize) => {
  const Spesifikasi = sequelize.define("spesifikasi", {
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
  return Spesifikasi;
};
