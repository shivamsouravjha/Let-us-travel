const Httperror = require('../models/error');
const { validationResult } = require('express-validator');
const getcoordinates = require('../util/location');
const Place = require('../models/placesschema'); 
 const mongoose = require('mongoose');


let DUMMY = [{
    id:'p1',
    title:'EMpire',
    description: 'away',
    location:{
        lat:40.43535,
        lng:45.25
    },
    address:'nearby',
    creator:'u1'
    
}];
const getplacebyid = async (req,res,next) => {
    const placeID =req.params.pid;
    let place;
    try{
        place=await Place.findById(placeID);

    }catch(err){
        return next( new Httperror('doesnot work',422));
    }
    if(!place){
        //const error= new Error('Not Here');
        //error.code =404;
        //next(error);
        throw  new Httperror('Couldnt find',404);
    }
    res.json({place});
};
const getplacebyuser = async (req,res,next) => {
    const userID =req.params.uid;
    let place;
    try{
        place=await Place.find({creator:userID});

    }catch(err){
        return next(new Httperror('Problem',404));
    }
    if(!place || place.length ===0){
        //const error= new Error('Not Here');
        //error.code =404;
        //next(error);
        throw new Httperror(' Couldnt find users',404);
    }
    res.json({place:place});
}; 

const createplace = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }
    const { title , description ,address ,creator } = req.body;
    let coordi;
    try{
        coordi =await getcoordinates(address);
    }
    catch(error){
        return next(error);
    }
    const createdplace = new Place({
        title,
        description,
        address,
        location:coordi,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
        creator
    });
    try{
    await createdplace.save();
    }catch(err){
        throw new Httperror(' Couldnt find users',404);
    }//DUMMY.push(createdplace);
    res.status(201).json({place:createdplace});
};
const updateplace =async(req,res,next)=>{
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        throw new Httperror('invalid data witch',422);
    }
    const { title , description } = req.body;
    const placeID = req.params.pid;
    let place;
    try{
        place=await Place.findById(placeID);

    }catch(err){
        return next(new Httperror('Problem',404));
    } 
    place.title = title;
    place.description = description;
    try{
        await place.save();
        }catch(err){
            return next( new Httperror(' Couldnt find users',404));
        }
    res.status(200).json({places : place});
};
const deleteplace = async(req,res,next)=>{
    const placeID = req.params.pid;
    let place;
    try{
        place=await Place.findById(placeID);

    }catch(err){
        return next(new Httperror('Problem',404));
    }
    try{
        await place.remove();

    }catch(err){
        return next(new Httperror('Problem',404));
    }
    res.status(200).json({message:'Deleted'});
};
exports.getplacebyid = getplacebyid;
exports.getplacebyuser = getplacebyuser;
exports.createplace = createplace;
exports.deleteplace = deleteplace;
exports.updateplace = updateplace;