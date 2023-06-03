const express = require("express");

const app = express();

const port = 5050;

app.set('view engine','ejs');

app.get('/', function(req, res){



    // var options = {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "long"
    // }

    var today = new Date();
    // console.log(today.toLocaleDateString("en-US"));

    // res.send(day)
    res.render("list", {
        dayIs: today
    });
});

app.listen(port, function(){
    console.log("App is Running on port : "+port);
});