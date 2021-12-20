const express = require("express");
const sequelize = require("./db_config");
const Employee = require("./models/employee");

const app = express();

app.get("/", (req, res) => {
  res.status(400).send("Hello server");
});

const PORT = process.env.PORT || 7070;

sequelize
  .sync()
  .then(() => {
    Employee.create({
      firstName: "Gilbert",
      lastName: "Owusu",
      department: "Weeding",
      gender: "Male",
      address: "Berekum - Jamdede",
      dateOfBirth: "25-1-1994",
      nextOfKin: "Winfred Owusu",
      nextOfKinContact: "024125465",
    });
  })
  .then((emp) => console.log(emp.toJSON()));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
