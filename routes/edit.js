const express = require("express");
const app = express();
const Item = require("../models/fitness");

app.get("/edit/:id", (req,res)=> {
    res.render("edit");
})
app.post('/edit/:id', (req, res)=>{
    Item
        .findByIdAndUpdate(req.params.id, {
            title:req.body.title,
            price:req.body.price,
            description:req.body.description
        })
        .then(item=>{
            res.redirect('/itemsadmin' )
        })
        .catch(err=>console.log(err))
})

module.exports = app;