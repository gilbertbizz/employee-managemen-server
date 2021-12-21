const Employee = require("../model/employee.js");

// get all employees
const getAllEmployees = async (req, res) => {
	try{
		const Employees = await Employee.findAll();
		res.status(200).send(Employees);
	}catch(err){
		console.log(err);
	}
}

// get employee by id
const getEmployeeById = async (req, res) => {
	try{
		const employee = await Employee.findOne({
			where: { id: req.params.id }
		});
		res.status(200).send(employee);
	}catch(err){
		console.log(err);
	}
}

const addEmployee = async (req, res) => {
	try {
		const {firstname, lastname, dateOfBirth, address, contact } = req.body
		const employee = await Employee.create({
			firstname,
			lastname,
			dateOfBirth,
			address,
			contact
		});
		res.status(200).send(employee)

	}catch(err){
		console.log(err)
	}
}

const updateEmployeeById = async (req, res) => {
	try {
		const employee = await Employee.update({
			where: {id: req.params.id}
		});
		res.status(200).send(employee)
	} catch(err) {
		console.log(err);
	}
}

const deleteEmployeeById = async (req, res) => {
	
}

const 
