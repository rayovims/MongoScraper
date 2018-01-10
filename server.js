var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var Handlebars = require("handlebars");
const mongoose = require("mongoose");

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/newyorktimespost");
// var template = Handlebars.compile(source);


var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});

