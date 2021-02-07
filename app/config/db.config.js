const mongoose = require("mongoose");

const db = {
    mongoose: mongoose,
    url: "mongodb://localhost:27017/testdb"
};

module.exports = db;