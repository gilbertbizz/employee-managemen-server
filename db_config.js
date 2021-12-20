const Sequelize = require("sequelize");

const sequelize = new Sequelize("employees-db", "", "", {
  host: "./db.sqlite",
  dialect: "sqlite",
});

module.exports = sequelize;
