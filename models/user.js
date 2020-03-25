const mongoose = require("mongoose");

module.exports = mongoose.model("users", {
    username: {
                type:String,
                required:true,
                unique:true},
    password:   String,
    firstName:  String,
    lastName:   String,

});