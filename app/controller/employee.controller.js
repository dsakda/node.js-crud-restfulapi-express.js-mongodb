const Employee = require("../models/employee.model");
//const queryString = require("querystring");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        res.status(400).send({ message: "Firstname can not be empty!" });
        return;
    }
    console.log(".....here2....");
    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        passportNumber: req.body.passportNumber,
        birthDay: req.body.birthDay
    });

    employee
        .save(employee)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Employee."
            });
        });

};

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
    Employee.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Employee."
            });
        });
};

// Find a single employee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Employee.findById(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Not found Employee with id " + id });
        });
};

// Update a employee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            res.send({ message: "Employee was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating Employee with id=" + id });
        });
};

// Delete a employee with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndRemove(id)
        .then(data => {
            res.send({ message: "Employee was deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: "Could not delete Employee with id=" + id });
        });
};

// Find employee by conditions
// exports.findByCondition = (req, res) => {
//     Employee.find({})
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving Employee."
//             });
//         });
// };