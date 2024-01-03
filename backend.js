//Made by Chamarr Auber
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const favicon = require("serve-favicon");
app.set("view engine", "ejs");
app.set("views", "./templates");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'images','computer.png')));


const port = 5000;

app.listen(port);

console.log(`Portfolio is running on Port ${port}`);


//Routes

//HOMEPAGE LANDING SCREEN
app.get("/", (req, res) => {
    res.render("landing");
});

//MAIN PAGE AFTER PRESSING ENTER
app.get("/enter", (req, res) => {
    res.render("index");
});