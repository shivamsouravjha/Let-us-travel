const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const schema=  mongoose.Schema;
const userschema = new schema({
    name: {type :String,required:true },
    email: {type :String,required:true,unique:true },
    password: {type :String,required:true,minlength:6 },
    image: {type :String,required:true },
    places: [{type :mongoose.Types.ObjectId,required:true,ref:'Place' }],
});

userschema.plugin(uniquevalidator);
module.exports =mongoose.model('User',userschema);