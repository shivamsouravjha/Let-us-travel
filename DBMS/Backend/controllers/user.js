const Httperror = require('../models/error');
const { validationResult } = require('express-validator');
const User= require("../models/userschema");
const getusers = (req,res,next)=>{
    res.json({users:DUMMY});
};
const signup =async(req,res,next)=>{
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return next( new Httperror('invalid data witch',422));
    }
    const {name,email,password,places}=req.body;
    let existinguser
    try{
     existinguser =await User.findOne({email:email})
    }catch(err){
        return next(new Httperror('Problem',404));
    }
    if(existinguser){
        return next(new('already','422'));
    }
    const createruser = new User({
        name,email,password,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
      places
    });
    try{
        await createruser.save();
    }catch(err){
            return next( new Httperror(' Couldnt find users',404));
        }
    res.status(201).json({user:createruser});
};
const login = (req,res,next)=>{
    const{email,password} = req.body;
    const identuser = DUMMY.find(u => u.email===email);
    if(!identuser || identuser.password !== password){
        throw new Httperror('no user',401);
    }
    res.json({message:'ypu in'});


};
exports.getusers = getusers;
exports.signup = signup;
exports.login = login;