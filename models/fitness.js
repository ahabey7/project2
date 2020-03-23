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
        default:'https://images.media-allrecipes.com/images/75131.jpg'
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