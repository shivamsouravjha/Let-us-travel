const Httperror = require('../models/error');
const { validationResult } = require('express-validator');
const User = require("../models/userschema");
const getusers = async(req,res,next)=>{
    let users;
    try{
        users = await User.find({},'-password');
    }catch(err)
    {
        return next(new Httperror('Issues',500));
    }
    res.json({users:users});
};
const signup =async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next( new Httperror('invalid data witch',422));
    }
    var {name,email,password}=req.body;
    let existinguser
    try{
     existinguser =await User.findOne({email:email})
    }catch(err){
        return next(new Httperror('Problem',404));
    }
    if(existinguser){
        return next(new Httperror('already',422));
    }
    var createduser = new User({
        name,email,password,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
      places:[]
    });
    try {
        console.log('Ramwani is Chutiya');

        await createduser.save();

    }catch (err){
        const error = new Httperror(
            'Signing up failed, please try again.',
            500
          );
          return next(error);        }
    res.status(201).json({user:createduser});
};
const login = async (req,res,next)=>{
    const{email,password} = req.body;
    let existinguser;
    try{
     existinguser =await User.findOne({email:email})
    }catch(err){
        return next(new Httperror('Problem',404));
    }
    if(!existinguser || existinguser.password !== password){
        return next(new Httperror("Invalid",401));
    }
    res.json({message: 'Logged in!'});

};
exports.getusers = getusers;
exports.signup = signup;
exports.login = login;