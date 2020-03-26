const express = require("express");
const app = express();
const Item = require("../../models/fitness");

app.get("/items", (req,res)=> {
    Item.find()
        .then((itemData)=> {
            res.render("items", {items:itemData});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})




module.exports = app;