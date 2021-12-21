const Sequelize = require("sequelize");
const sequelize = require("../db_config");

const Employee = sequelize.define("employee", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	firstname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastname: {
		type: Sequelize.STRING,
		allowNull: false
	},
	dateOfBirth: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	},
	contact: {
		type: Sequelize.STRING
	}
});

