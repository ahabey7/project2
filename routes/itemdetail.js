const express = require("express");
const app = express()
const Recipe = require("../models/item")


app.get("/recipedetail/:id", (req,res)=> {
    Recipe
        .findById(req.params.id)
        .then((recipeId)=> {
            res.render("recipedetail", {recipe: recipeId});
        })
        .catch((err)=> {
            res.send("error");
        })
})
module.exports = app;