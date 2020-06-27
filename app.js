var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",function(req, res){
    res.render("calculators.ejs");
});


app.get("/home",function(req, res){
    res.render("home.ejs");
});
app.post("/homesol", function(req, res){
    var info = req.body;
    res.render("homesol.ejs", {info: info});
});


app.get("/car",function(req, res){
    res.render("car.ejs");
});
app.post("/carsol", function(req, res){
    var info = req.body;
    res.render("carsol.ejs", {info: info});
});


app.get("/vacation",function(req, res){
    res.render("vacation.ejs");
});
app.post("/vacationsol", function(req, res){
    var info = req.body;
    res.render("vacationsol.ejs", {info: info});
});


app.get("/sip",function(req, res){
    res.render("sip.ejs");
});
app.post("/sipsol", function(req, res){
    var info = req.body;
    res.render("sipsol.ejs", {info: info});
});


app.listen(3000, function(){
    console.log("Calculator has started!!");
});