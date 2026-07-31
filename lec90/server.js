/**
           2 kaam hote iss  server.js file ke
 * server ko run krna 
 * server ko DB se connect krna(via mongoose package)
 */

const app = require("./src/app")

const mongoose  = require("mongoose")

function connectToDB() {
    mongoose.connect("URI/lec90") //dont push code with URI (copy URI from compass)
    .then(()=>{
        console.log("Connected to DB");
    })
}

connectToDB()

app.listen(3000, (req,res)=>{
    console.log("server  is  running on port 3000");
})