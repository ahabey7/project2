const express = require("express");
const app = express();
const User = require("../../models/user");
const bcrypt = require('bcrypt');


app.get("/user/logout", (req, res, next) => {
    req.session.destroy((err) => {
        // cannot access session here
        res.redirect("/user/login");
    });
});