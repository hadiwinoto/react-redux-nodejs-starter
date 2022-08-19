module.exports = (sequelize, Sequelize) => {
  const Infoumum = sequelize.define("infoumums", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    jenis: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    },
    negara_pembuat: {
      type: Sequelize.STRING
    }
  });

  return Infoumum;
};
