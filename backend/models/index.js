const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const sequelize = new Sequelize("database_dev", "root", "12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// console.log(
//   fs
//     .readdirSync(__dirname)
//     .filter((file) => {
//       return (
//         file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//       );
//     })
//     .forEach((file) => {
//       const model = require(path.join(__dirname, file))(
//         sequelize,
//         Sequelize.DataTypes
//       );
//     })
// );
