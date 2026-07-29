//why use require? not import? because most of the company uses old created server by express

const express = require('express');

const app = express(); //server instance create krna not start krna 


app.get('/', (req, res) =>{
    res.send('hello my name is Arnav')
})
//app.listen() actually starts the server and listens to the port mentioned in the argument of listen method

app.get('/about', (req, res) =>{
    res.send('hello i am from about page')
})


app.get('/help', (req,res)=>{
    res.send('hello form help page')
})

app.listen(3000)

//ek port no. par sirf ek hi process listen kr skta hai. so if we want to run multiple servers then we have to use different port no. for each server.
//generally hum port 3000 use krte hai for development purpose.

//by running the command npx nodemon server.js 
//isse hum baar bbaar server restart nahi krna pdega , it will automatically detects chnnages and restarts the  server


//what is postman?

