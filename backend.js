//Made by Chamarr Auber
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
app.set("view engine", "ejs");
app.set("views", "./templates");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// client.connect();


//Routes

//HOMEPAGE LANDING SCREEN
app.get("/", (req, res) => {
    res.render("landing");
});