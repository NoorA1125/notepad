//We can start by linking out data
var notes = require("../db/db.json");

const { v4: uuidv4 } = require("uuid");


//Routing
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notes)
    });
    // Add a note
    app.post("/api/notes", function (req, res) {
        var newNote = req.body;
        newNote.id = uuidv4();
        console.log(newNote);
        notes.push(newNote);
        res.json(newNote);
    });
    //delete a note
    app.delete("/api/notes/:id", function (req, res) {
        const deleteId = req.params.id;
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === deleteId) {
                notes.splice(i, 1);
                break;
            }
        }

        res.json(notes);
    });

};