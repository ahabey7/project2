const express = require("express");
const app = express();
const Item = require("../../models/fitness");

app.get("/accessories", (req,res)=> {
    Item.find({category: "Accessories"})
        .then((itemData)=> {
            res.render("accessories", {items:itemData});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})




module.exports = app;