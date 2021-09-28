'use strict';
const axios = require('axios');
const Fruit=require('../modules/fruit.modules');

const getFruit=(req,res)=>{
    axios.get("https://fruit-api-301.herokuapp.com/getFruit").then((fruitData)=>{
        res.json(fruitData.data.fruits);
    });
};
const getFruitByEmail=(req,res)=>{
    const email=req.params.email;
Fruit.find({email:email},(error,foundData)=>{res.json(foundData)});
};
const createFruit=(req,res)=>{
    const {
        name,
        price,
        image,
        email
      }=req.body;
      const newFruit= new Fruit({
        name,
        price,
        image,
        email
      });
      newFruit.save();
      res.json(newFruit);
};
const deleteFruit=(req,res)=>{
    const id=req.params.id;
    Fruit.deleteOne({_id:id},(error,deletedItem)=>{
        res.json(deletedItem);
        console.log('Iteam has been deleted');
    });
};
const updateFruit=(req,res)=>{
    const id=req.params.id;
    const {
        name,
        price,
        image,
        email,
      }=req.body;
      Fruit.findByIdAndUpdate({_id:id},{
        name,
        price,
        image,
        email,
      },{new:true},(error,updatedData)=>{res.json(updatedData)});
};

module.exports={getFruit,getFruitByEmail,createFruit,deleteFruit,updateFruit};