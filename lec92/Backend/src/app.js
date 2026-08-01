const express = require("express")
const app = express()

app.use(express.json())  //middelware is express.json()

const noteModel = require("./models/note.model")

/**
 * - POST /api/notes
 * - create new note and save data in mongoDB
 * - req.body = {title,description}
 */

app.post("/api/notes", async (req,res)=>{
    const {title,description} = req.body
    const newNote = await noteModel.create({title,description})
    res.status(201).json({
        message:"note created successfully",
        newNote
    })
})

/**
 * - GET /api/notes
 * - create new note and save data in mongoDB
 */

app.get("/api/notes", async (req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"fetched all notes",
        note:notes
    })
})


module.exports = app