const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const db = require("./app/models");
const role = db.role;

// db.connectMysql.sync({force: true}).then(() => {
//   console.log('Drop and ReSync');
//   initial();
// });

db.connectMysql.sync();

function initial() {
  role.create({
    id: 1,
    name: "user"
  });
 
  role.create({
    id: 2,
    name: "moderator"
  });
 
  role.create({
    id: 3,
    name: "admin"
  });
}

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/",function (req, res){
  res.json({ message: "REST API HRM system (Node JS)" });
});

require('./app/routes/auth_routes')(app);
require('./app/routes/user_routes')(app);
require('./app/routes/profile_routes')(app);
require('./app/routes/dataumum_routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});