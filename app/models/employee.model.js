const mongoose = require("mongoose");

let employeesSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        emailAddress: String,
        passportNumber: String,
        birthDay: String
    }
);

module.exports = mongoose.model("employees", employeesSchema);
