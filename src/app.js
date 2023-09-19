// import database connection file.
require("./database/connection");

// import express module in express variable.
const express = require("express");
const app = express();

// declare port where web site run.
// if defined port(3000) is not available then use environment port means available port on environment.
const port = process.env.PORT || 3000;

// import path module in path varible.
const path = require("path");

// import hbs module in hbs varible.
const hbs = require("hbs");

// import register table in hbs varible.
const Register = require("./models/registers");

// use of json in express.
const { json } = require("express");
app.use(express.json());
// show table value in consol as undeined.
// in console table's value not show as undifined.
app.use(express.urlencoded({extended:false}));

// use handlebars is defined to expressjs.
app.set("view engine","hbs");

// use port variable to liosten or run page.
app.listen(port,() => {
    console.log(`Server is running at port no ${port}`);
});

// find or see the path of directory in different folder.
const static_path = path.join(__dirname,"../public");
const view_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

// use of run the available all static file in public folder.
app.use(express.static(static_path));
// views folder is avalible on view_path variable.so,find view_path instead of views folder.
app.set("views",view_path);
// use partials file in views file.
// In views file where partials use then use partials file.
hbs.registerPartials(partial_path);

// open index or home page.
app.get("/",(req,res) => {
    // res.send("Hello!");
    res.render("index");
})
// open login or home page.
app.get("/login",(req,res) => {
    // res.send("Hello!");
    res.render("login");
})
// open login or home page.
app.get("/register",(req,res) => {
    // res.send("Hello!");
    res.render("register");
})
// user date catch
app.post("/register",async (req,res) => {
    try {
        // console.log(req.body.name);
        const usertable = new Register({
            name : req.body.name,
            number : req.body.number,
            email : req.body.email,
            gender : req.body.gender,
            age : req.body.age,
            password : req.body.password
        })
        const tablesave = await usertable.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
    }
})