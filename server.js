'use strict';
const express = require('express');
// const app = express();
const cors = require('cors');


require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.json());
const mongoose=require('mongoose');

const port=process.env.PORT;
const mongo_url=process.env.ATLAS_URL;
mongoose.connect(`${mongo_url}`);
const {getFruit,getFruitByEmail,createFruit,deleteFruit,updateFruit}=require('./controller/fruit.controller');
server.get('/',(req,res)=>{
    res.json('Hello');
});
server.get('/fruit',getFruit);
server.get('/fruit/:email',getFruitByEmail);
server.post('/fruit',createFruit);
server.delete('/fruit/:id',deleteFruit);
server.put('/fruit/:id',updateFruit);

server.listen(port,()=>{
console.log(`PORT on ${port}`);
});
