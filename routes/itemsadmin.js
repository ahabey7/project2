const express = require("express");
const app = express();
const Item = require("../models/fitness");



app.use('/itemsadmin',(req, res, next) => {
    if (req.session.currentUser) { 
      next(); // 
    } else {                        
      res.redirect("/user/login");        
    }                                
  });                             
 
 app.get("/itemsadmin", (req, res, next) => {
    Item.find()
        .then((itemData)=> {
            res.render("itemsadmin", {items:itemData});
        })
        .catch((err)=> {
            res.render("error", err);
        })
  });


module.exports = app;