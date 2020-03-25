const express = require("express");
const app = express();
const User = require("../../models/user");
const bcrypt = require('bcrypt');


app.get("/user/login", (req, res) => {
    res.render("login");
})

app.post("/user/login", (req, res, next) => {
    const { username, password, firstName, lastName, admin } = req.body;
    User.findOne({
            username
        })
        .then((user) => {
            if (!user) res.send("invalid credentials.")
            else {
                bcrypt.compare(password, user.password, function(err, correctPassword) {
                    if (err) next("hash compare error");
                    else if (!correctPassword) res.send("invalid credentials.");
                    else {
                        req.session.currentUser = user;
                        res.redirect("/itemsadmin");

                    }
                });
            }
        })
        .catch((err) => {
            res.send("Error, not logged in.")
        })
})



module.exports = app;