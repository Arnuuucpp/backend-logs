const express =  require("express");
const mongoose  = require("mongoose")

const app = express();

function connectToDB() {
    mongoose.connect("URI/lec90") //dont push code with URI (copy URI from compass)
    .then(()=>{
        console.log("Connected to DB");
    })
}

connectToDB()

module.exports = app