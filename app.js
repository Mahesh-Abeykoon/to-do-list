const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const items = [];

const port = 5050;

app.set('view engine','ejs');

app.get('/', function(req, res){

    var options = { day: "numeric", year: "numeric", month: "long" }

    var today = new Date();
    
    // console.log(today.toLocaleDateString("en-US"));
    res.render("list", { dayIs: today, dayItems: items
    });
});

app.post("/", function(req,res){
    var item = req.body.newItem
    items.push(item);
    res.redirect("/")
})

app.listen(port, function(){
    console.log("App is Running on port : "+port);
});