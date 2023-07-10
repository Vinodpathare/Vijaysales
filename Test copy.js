
var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Green Mart </h1>"
            +"<hr/>"
            +"<h3>Daily Grocery and Vegetables</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Fruits</li>"
            +"<li>Vegetables</li>"
            +"<li>Coldrinks</li>"
            +"<li>Cereals</li>"
            +"<li>Snacks</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Green Mart </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Buy all Products With one click</li>"
            +"<li>Follow us on Insta @GreenMart</li>"
            +"<li>for more info visit Website www.Greenmart.com</li>"
            + "</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Green Mart</h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(9000);
console.log("Green Mart Online shopping running on port 9000");