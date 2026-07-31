const express = require("express")

const app = express()

const notes = []

app.use(express.json())

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message: "Note Created Successfully"
    })
})

/*GET /notes*/
app.get("/notes", (req,res)=>{
    res.status(200).json({
        notes: notes
    })
})

/*DELETE /notes*/

app.delete("/notes/:index",(req,res)=>{
    console.log(req.params.index);
    delete notes[req.params.index]
    res.status(200).json({
        message: "note is deleted"
    })
})

/*PATCH /notes*/

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.status(200).json({
        message:"note is created"
    })
})



module.exports = app