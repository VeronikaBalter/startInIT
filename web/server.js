const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var proxy = require('express-http-proxy');

const db = require("./models");
const initialDb = require("./models/initialDb");

const app = express();

var corsOptions = {
  origin: "http://localhost:5428"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next)=> {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// db.sequelize.sync({force: true}).then(() => {
//   initialDb.initial
//   initial();
// });
// function initial() {
// }


app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/vacancy.routes')(app);
require('./routes/resume.routes')(app);
require('./routes/test.routes')(app);
require('./routes/company.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 5428;
app.use('/', proxy('http://localhost:8080'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});