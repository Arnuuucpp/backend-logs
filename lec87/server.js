//agar req.body ka data pdhna chahte ho toh yeh  ek line likni pdegi
//app.use(express.json())  yeh ek middleware  hai which we will be studying later

const express = require("express")

const app = express()

const notes = []

app.use(express.json()) //its  a middleware

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send('note created')
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})