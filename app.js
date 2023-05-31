const express = require("express");

const app = express();

const port = 5050;

app.get('/', function(req,res){
    res.sendFile(__dirname +"/index.html")
})

app.listen(port, function(){
    console.log("App is Running on port : "+port);
})