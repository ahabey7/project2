const express = require("express");
const app = express()
const Item = require("../models/fitness")


app.get("/delete/:id", (req,res)=> {
    Item
        .findByIdAndDelete(req.params.id)
        .then((itemID)=> {
            res.redirect("/items")
        })
        .catch(err=> {
            console.log("Err", err)
        })
})
module.exports = app;