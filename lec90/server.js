/**
           2 kaam hote iss  server.js file ke
 * server ko run krna 
 * server ko DB se connect krna(via mongoose package)
 */

const app = require("./src/app")

app.listen(3000, (req,res)=>{
    console.log("server  is  running on port 3000");
})