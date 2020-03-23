const express = require("express");
const app = express();
const Item = require("../models/fitness");

app.get("/itemsadmin", (req,res)=> {
    Item.find()
        .then((itemData)=> {
            res.render("itemsadmin", {items:itemData});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})




module.exports = app;