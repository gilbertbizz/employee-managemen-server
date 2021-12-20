const Sequelize = require("sequelize");
const sequelize = require("../db_config.sqlite");

const Employee = sequelize.define("Employee", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false
	},
	firstname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	dateOfBirth: {},
	address: {},
	contact: {}
});

