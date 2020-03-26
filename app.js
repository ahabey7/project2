const express = require("express");
const app = express()
app.set('view engine', 'hbs');
const mongoose = require('mongoose');
var hbs = require('hbs');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);


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

//Create middleware to enable session
app.use(session({
    secret: "basic-auth-secret",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60 // 1 day
    })
}));


//middelware
app.use("/", require("./routes/index"));
app.use("/", require("./routes/shop/items"));
app.use("/", require("./routes/itemdetail"));
app.use("/", require("./routes/itemsadmin"));
app.use("/", require("./routes/delete"));
app.use("/", require("./routes/create"));
app.use("/", require("./routes/edit"));
app.use("/", require("./routes/user/signup"));
app.use("/", require("./routes/user/login"));
app.use("/", require("./routes/user/logout"));
app.use("/", require("./routes/shop/equipment"));
app.use("/", require("./routes/shop/apparel"));
app.use("/", require("./routes/shop/accessories"));






//Create middleware to enable session
app.use(session({
    secret: "basic-auth-secret",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60 // 1 day
    })
}));





//connect to server
app.listen(3002, () => {
    console.log("running on port 3002")
})

//  Item.insertMany(data)
//      .then((arr) => {})
//      .catch((error) => {
//          console.log(error);
//      })