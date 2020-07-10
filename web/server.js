const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var proxy = require('express-http-proxy');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./models");
// const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "admin"
//   });
// }


//require('./routes/auth.routes')(app);
//require('./routes/user.routes')(app);
require('./routes/vacancy.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.use('/', proxy('http://localhost:8080'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});