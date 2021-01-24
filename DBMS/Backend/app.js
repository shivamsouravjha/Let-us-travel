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
  .connect('')
  .then(() => {
    app.listen(4001);
  })
  .catch(err => {
    console.log(err);
  });