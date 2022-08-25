module.exports = (connectMysql,Sequelize) => {
  const Dataumum = connectMysql.define("dataumums", {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      jenis: {
        type: Sequelize.TEXT
      },
      alamat: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.STRING
      },
      kontak: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
    });
  return Dataumum;
};