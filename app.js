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

    var today = new Date();

    var options = { day: "numeric", year: "numeric", month: "long" }
    
    var day = today.toLocaleDateString("en-US", options);
    // console.log(today.toLocaleDateString("en-US"));
    res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    // console.log(req.body)
 
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

app.get("/about", function(req, res){
    res.render("about");
})
app.listen(port, function(){
    console.log("App is Running on port : "+port);
});