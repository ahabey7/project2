const express = require("express");
const app = express()
app.set('view engine', 'hbs');
const mongoose = require('mongoose');
var hbs = require('hbs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

const Item = require("./models/fitness");
const data = require('./data.js'); // Import of the data from './data.js'


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

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

//middelware
app.use("/", require("./routes/index"));
app.use("/", require("./routes/items"));
app.use("/", require("./routes/itemdetail"));
app.use("/", require("./routes/itemsadmin"));
app.use("/", require("./routes/delete"));
app.use("/", require("./routes/create"));
app.use("/", require("./routes/edit"));




//connect to server
app.listen(3003, () => {
    console.log("running on port 3003")
})

// Item.insertMany(data)
//     .then((arr) => {})
//     .catch((error) => {
//         console.log(error);
//     })