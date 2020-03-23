const express = require("express");
const app = express()
const Item = require("../models/fitness")


app.get("/itemdetail/:id", (req,res)=> {
    Item
        .findById(req.params.id)
        .then((recipeId)=> {
            res.render("itemdetail", {item: itemId});
        })
        .catch((err)=> {
            res.send("error");
        })
})
module.exports = app;