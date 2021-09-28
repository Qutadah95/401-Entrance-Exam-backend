'use strict';
const mongoose=require('mongoose');

const FruitSchema = new mongoose.Schema({
 
    name:{type:String},
    price:{type:String},
    image:{type:String},
    email:{type:String},
  });

  const newFruit = mongoose.model("Fruit", FruitSchema);
  module.exports = newFruit;