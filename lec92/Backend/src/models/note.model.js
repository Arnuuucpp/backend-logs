const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
})

const noteModel = mongoose.model("notes",noteSchema)
//this "notes" strinng is the name of collection of same format data stored in mongoDB 

module.exports = noteModel