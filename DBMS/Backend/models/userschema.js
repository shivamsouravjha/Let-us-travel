const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const schema=  mongoose.Schema;
const userschema = new schema({
    name: {type :String,required:true },
    description: {type :String,required:true,unique:true },
    password: {type :String,required:true,minlength:6 },
    image: {type :String,required:true },
    places: {type :String,required:true }
         
});

userschema.plugin(uniquevalidator);
module.exports =mongoose.model('User',userschema);