//what is server
//server ek machine hai which is programmed to listen to requests and send responses

//server ki start hoti hai by this command npm init -y 

//create a server using Express.js(express is a package which is used to create server in node.js) and nodejs is a runtime environment which is used to run javascript outside the browser
//1. install express using npm install express
//2. create a file server.js and write the code below

const express  =  require("express")

const app =  express()  //this will create an instance of express

//to run the server we need to listen to a port and for that we use app.listen(port, callback function)

app.listen(3000)