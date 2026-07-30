/*
usecase of app.js

server create krna 

server ko config  krna

*/

const express = require("express")

const app = express()

const notes = []

app.use(express.json())


//POST /notes
app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    res.send("note created")
})


//GET /notes
app.get("/notes", (req, res) => {
    res.send(notes)
})


//DELETE /notes
// app.delete("/notes",(req,res)=>{
//     notes.pop(notes)
//     res.send("note deleted")
// })

/*params*/
/*delete /notes/0   or we  can write dynamically by using colon (:) like this 
/notes/:index
*/
app.delete("/notes/:index", (req, res) => {
    // console.log(req.params.index);
    // res.send("note deleted")

    delete notes[req.params.index]
    res.send("note deleted successfully")
})


//PATCH  to  update the description

app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description
    res.send("note updated successfully")
    console.log(notes);
})

module.exports = app