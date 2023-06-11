const express = require("express");

const app = express();

const port = 5050;

app.set('view engine','ejs');

app.get('/', function(req, res){

    var today = new Date();
    var currentDate = today.getDate();
    var day ="";
    
    switch (currentDate){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error!"+currentDate);
    }


    // res.send(day)
    res.render("list", {
        dayIs: day
    });
});

app.listen(port, function(){
    console.log("App is Running on port : "+port);
});