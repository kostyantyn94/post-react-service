const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("./index");

const User = sequelize.define("user", {
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  bio: DataTypes.TEXT,
  image: DataTypes.TEXT,
  password: DataTypes.STRING,
});

module.exports = User;
