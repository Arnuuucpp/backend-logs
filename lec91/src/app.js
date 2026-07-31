const express = require("express")

const app = express()

const noteModel = require("./models/notes.model")

app.use(express.json())
/*
POST /notes
This endpoint allows clients to create a new note. The request body should contain the title and description of the note. The server will validate the input and save the note to the database.
*/
app.post("/notes",async (req,res)=>{
    const {title,description} = req.body
    const newNote = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "note created successfully",
        note: newNote
    })
})

/*
GET /notes
This endpoint allows clients to retrieve all notes from the database. The server will fetch the notes and return them in the response.

for  this   we'll use the find method of mongoose model to get all the notes  from the  database in a ARRAY OF OBJECTS format
*/

app.get("/notes",  async (rej,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: " notes found successfully",
        notes: notes
    })
})

module.exports = app