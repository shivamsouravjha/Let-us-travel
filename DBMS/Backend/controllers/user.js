const Httperror = require('../models/error');
const { validationResult } = require('express-validator');
const User= require("../models/userschema");
const getusers = (req,res,next)=>{
    res.json({users:DUMMY});
};
const signup = (req,res,next)=>{
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        throw new Httperror('invalid data witch',422);
    }
    const {name,email,password}=req.body;
    const existinguser = User.findone
    const createruser = {
        id:"sex",name,email,password
    };
    const already = DUMMY.find( p=> p.email === email);
    if(already)
    {
        throw new Httperror("ALready",401);
    }
    DUMMY.push(createruser);
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