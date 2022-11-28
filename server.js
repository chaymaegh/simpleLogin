const express = require("express");
const path = require("path");
 const bodyParser = require("body-parser");
// const request = require("request");
const session = require("express-session");
const { v4:uuid4 } = require("uuid");


const router = require("./router");
const app = express();

const port = process.env.PORT||3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.set("view engine","ejs");

//load static as
app.use("/static",express.static(path.join(__dirname,"public")))



app.use(session({
    secret:uuid4(),
    resave:false,
    saveUninitialized:true
}));


app.use("/route",router);



//home route
app.get("/",function(req,res){
res.render("login.ejs",{title: "Login System"});
})

app.listen(3000);
