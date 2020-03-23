const express = require("express");
const app = express()
const Item = require("../models/fitness")


app.get("/itemdetail/:id", (req,res)=> {
    Item
        .findById(req.params.id)
        .then((itemId)=> {
            res.render("itemdetail", {items: itemId});
        })
        .catch((err)=> {
            res.send("error");
        })
})
module.exports = app;