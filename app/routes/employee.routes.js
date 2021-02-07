const employee = require("../controller/employee.controller");
const router = require("express").Router();

//Create a new employee
router.post("/", employee.create);

//Retrieve all employee
router.get("/", employee.findAll);

// Retrieve a single employee with id
router.get("/:id", employee.findOne);

// Update a employee with id
router.put("/:id", employee.update);

// Delete a employee with id
router.delete("/:id", employee.delete);

// Retrieve employee by condition
//router.get("/", employee.findByCondition);

module.exports = router;