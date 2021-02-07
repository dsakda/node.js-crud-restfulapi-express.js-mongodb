const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// let corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api/employees', require("./app/routes/employee.routes"));

const db = require("./app/config/db.config");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});