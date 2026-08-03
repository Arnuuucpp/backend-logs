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

    //can  be done also  using .save()
    /**
    const Note = new Note({
    title:"Node.js",
    description:"Backend Basics"
    });

    await note.save();
     */
})

/**
 * - GET /api/notes
 * - create new note and save data in mongoDB
 */

app.get("/api/notes", async (req,res)=>{
    const notes = await noteModel.find()    //find method returns data in  array of objects
    res.status(200).json({
        message:"fetched all notes",
        note:notes
    })
})

/**
 * - DELETE /api/notes/:id
 * - delete note by using the params
 */

app.delete("/api/notes/:id", async (req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Note Deleted Successfully"
    })
})

/**
 * - PATCH /api/notes/:id
 * - Update note by using the params
 */

app.patch("/api/notes/:id",async (req,res)=>{
    const id = req.params.id
    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})  //to  note here is after id description is passed in object
    res.status(200).json({
        message:"note updated  successfully."
    })
})




module.exports = app