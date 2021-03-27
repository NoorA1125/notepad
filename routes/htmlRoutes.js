//Dependencies
var path = require("path");


//Routing
module.exports = function(app) {
    app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "notes.html"));
    });
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "index.html"));
    });

  };