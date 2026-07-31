require("dotenv").config() //this will load the .env file and make the variables available in process.env

const connectToDB = require("./src/config/database")
const app = require("./src/app")


connectToDB()

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
})