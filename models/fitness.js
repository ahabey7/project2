const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fitnessSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
      },
      image:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2014/06/18/18/42/running-shoe-371625__480.jpg'
      },
      created:{
        type:Date,
        default:Date.now
      },
      price:{
          type:Number
      },
      description:{
        type:String
      }
  });


const Item = mongoose.model("fitness", fitnessSchema)

module.exports = Item;