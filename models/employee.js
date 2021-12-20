const { DataTypes } = require("sequelize");
const sequelize = require("../db_config");

const employee = sequelize.define("employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  dateOfBirth: {
    type: DataTypes.STRING,
  },
  nextOfKin: {
    type: DataTypes.STRING,
  },
  nextOfKinContact: {
    type: DataTypes.STRING,
  },
});

module.exports = employee;
