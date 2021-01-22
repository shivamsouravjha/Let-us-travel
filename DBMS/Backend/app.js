  const express =require('express');
  const bodyParser = require('body-parser');  
  const Httperrors = require('./models/error');
  const userroutes =require('./routes/users-routes');
  const placeroutes =require('./routes/place-routes');
  const mongoose = require('mongoose');
  const app = express();
  app.use(bodyParser.json());
  app.use('/api/places',placeroutes);
  app.use('/api/users',userroutes);

  app.use((req,res,next) => {
    const error = new Httperrors('Route not found',404);
    throw error;
  });
  app.use((error,req,res,next)=>{
    if(res.headerSent){
      return  next(error);
    }
    res.status(error.code ||500);
    res.json({message: error.message || 'Unknown'});
  });
  mongoose
  .connect('mongodb://shivam:123456shivam@cluster0-shard-00-00.dm1xw.mongodb.net:27017,cluster0-shard-00-01.dm1xw.mongodb.net:27017,cluster0-shard-00-02.dm1xw.mongodb.net:27017/Place?ssl=true&replicaSet=atlas-x6eag6-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });