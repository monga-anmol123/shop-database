
require('dotenv').config()
    

var express = require("express");
var path = require("path");
var routes = require("./routes");
var app = express();
var path = require("path");

const userModel = require("./model/user");
const db = require("./working");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));

// console.log(__dirname,path.dirname(__dirname),path.join(__dirname, 'views'));
app.set("view engine", "hbs");
app.use("/", routes);

app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000);
