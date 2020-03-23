const express = require("express");
const app = express();
const Item = require("../models/fitness");


app.get("/createItem", (req,res)=> {
    res.render("createITem");
})

app.post("/createItem", (req,res)=> {
    console.log(req.body);
    Item
        .create({
            title: req.body.title,
            image: req.body.image,
            dishType: req.body.dishType,
            creator: req.body.creator,
            duration: req.body.duration,
            level: req.body.level
            
        })
        .then((item)=> {
            res.redirect(`/itemdetail/${item._id}`);
        })
        .catch((err)=> {
            res.send("error");
        })
})

module.exports = app;