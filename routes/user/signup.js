const express = require("express");
const app = express();
const User = require("../../models/user");
const bcrypt = require('bcrypt');

app.get("/user/signup", (req,res)=> {
    res.render("signup");
})

app.post("/user/signup", (req, res) => {
    const { username, password, firstName, lastName } = req.body;
    User
        .findOne({ "username": username })
        .then(user => {
            if (user !== null) {
                res.render("user/signup.hbs", {
                    errorMessage: "The username  exists!"
                })
            }
            else {
                bcrypt.hash(password, 10, function (err, hash) {
                    if (err) next(" error");
                    else {
                        User
                            .create({
                                username: username,
                                password: hash,
                                firstName:firstName,
                                lastName:lastName
                            })
                            .then((user) => {
                                res.redirect("/");
                            })
                            .catch((err) => {
                                res.send("user not created", err);
                            })
                    }
                })
            }
        })
    })


    module.exports = app;