const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.static
const items = [];

const workItems = [];
const port = 5050;

app.set('view engine','ejs');

app.get('/', function(req, res){

    var options = { day: "numeric", year: "numeric", month: "long" }

    var today = new Date();
    
    // console.log(today.toLocaleDateString("en-US"));
    res.render("list", { listTitle: today, newListItem: items });
});

app.post("/", function(req,res){
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/") 
    }
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItem: workItems});
})
app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(port, function(){
    console.log("App is Running on port : "+port);
});