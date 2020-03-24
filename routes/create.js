const express = require("express");
const app = express();
const Item = require("../models/fitness");


app.get("/create", (req,res)=> {
    res.render("create");
})

app.post("/create", (req,res)=> {
    console.log(req.body);
    Item
        .create({
            title: req.body.title,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description
            
        })
        .then((item)=> {
            res.redirect(`/itemdetail/${item._id}`);
        })
        .catch((err)=> {
            res.send("error");
        })
})

module.exports = app;