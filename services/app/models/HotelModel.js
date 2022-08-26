module.exports = (connectMysql,Sequelize) => {
  const Hotel = connectMysql.define("hotels", {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nama: {
        type: Sequelize.TEXT
      },
      alamat: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
    });
  return Hotel;
};