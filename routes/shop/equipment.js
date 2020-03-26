const express = require("express");
const app = express();
const Item = require("../../models/fitness");

app.get("/equipment", (req,res)=> {
    Item.find({category: "Equipment"})
        .then((itemData)=> {
            res.render("equipment", {items:itemData});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})




module.exports = app;