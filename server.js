//Dependecies
// var apiRoutes = require("./apiRoutes");
// var apiRoutes = require("./htmlRoutes");
// var myserver = require("./server.js");
var express = require("express");
var app = express();

//Port initialization
var PORT = process.env.PORT || 6561; //my fav 4 digit #'s

//Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //very important (without a title end point)

//routes/bread crumbs
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listening to our port
app.listen(PORT, function () {
    console.log("Server initiated. Now listening on Port: " + PORT);
});