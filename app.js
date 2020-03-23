const express = require("express");
const app = express()
app.set('view engine', 'hbs');
const mongoose = require('mongoose');
var hbs = require('hbs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))


//connect to database
mongoose.connect('mongodb://localhost/fitness-app-dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((db) => {
        console.log("connected to db")
    })
    .catch((error) => {
        console.log("error db", error)
    })

    hbs.registerPartials(__dirname + '/views/partials');

//middelware
app.use("/", require("./routes/index"));
app.use("/", require("./routes/items"));
app.use("/", require("./routes/itemdetail"));

//connect to server
app.listen(3002, () => {
    console.log("running on port 3002")
})
