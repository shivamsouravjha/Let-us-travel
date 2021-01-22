const mongoose = require('mongoose');
const userschema=  mongoose.Schema;
const placeschama = new userschema({
    title: {type :String,required:true },
    description: {type :String,required:true },
    image: {type :String,required:true },
    location: {lat:{type :Number,required:true },lng:{type :Number,required:true }},
    address: {type :String,required:true },
    creator: {type :String,required:true },
            
});
module.exports =mongoose.model('Place',placeschama);