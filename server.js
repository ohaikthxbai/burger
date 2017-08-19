// requiring npm packages and others
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');
var burger = require("./models/burger.js");


var app = express();
var PORT = process.env.PORT || 8080;

// body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

// route this
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

 var routes = require("./controllers/burgers_controller.js");
 app.use("/", routes);

 app.use(express.static(path.join(__dirname, './public')));

// port listener (hopefully no errors!)
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
