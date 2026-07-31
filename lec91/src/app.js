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

module.exports = app