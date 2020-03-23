const express = require("express");
const app = express();
const Item = require("../models/fitness");
const data = require('../data.js'); // Import of the data from './data.js'



app.get("/", (req, res) => {
    res.render("index");
});





      module.exports = app;
