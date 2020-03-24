  const express = require("express");
  const app = express();
  const Item = require("../models/fitness");

<<<<<<< HEAD
  app.get("/edit/:id", (req, res) => {
      res.render("edit");
  })
  app.post('/edit/:id', (req, res) => {
      Item
          .findByIdAndUpdate(req.params.id, {
              title: req.body.title,
              price: req.body.price,
              description: req.body.description
          })
          .then(item => {
              res.redirect('/itemdetail/' + req.params.id)
          })
          .catch(err => console.log(err))
  })
=======
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
            res.redirect('/itemdetail/' + req.params.id)
        })
        .catch(err=>console.log(err))
})
>>>>>>> 7f9c144ba6aaf46b4bb17dbe05db03bec1ad67f6

  module.exports = app;