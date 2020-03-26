const express = require("express");
const app = express();
const Item = require("../../models/fitness");

app.get("/shop/apparel", (req, res) => {
    Item.find({ category: "Apparel" })
        .then((itemData) => {
            res.render("apparel", { items: itemData });
        })
        .catch((err) => {
            res.render("error", err);
        })
})




module.exports = app;