const express=require('express');
const router=express.Router();
const Locations=require('../models/Locations')
const axios = require('axios')
require('dotenv/config');
router.get('/getCollections',function(req,res){
    Locations.find({},(error,result)=>{
        if(!!error){
           console.log(error)
        }else{
            res.json(result)
        }
    })
})
router.post('/addLocationToDb',async(req,res)=>{
    const insertlocationToDb=new Locations({
       city:req.body.locationInfo.cityName
    })
    try {
        const insertData= await insertlocationToDb.save()
           res.json(insertData)
    } catch (error) {
        res.json("Error",error)
    }
           
})
router.patch('/updateLocation',async(req,res)=>{
    try {
        const updateLocation= await Locations.updateOne({_id:req.body.locationInfo.id},{$set:{city:req.body.locationInfo.city}})
        res.json(updateLocation)
    } catch (error) {
        res.json(error)
    }
})
router.post('/deleteLocation',async(req,res)=>{
    try {
        const removeFromDB= await Locations.remove({_id:req.body.locationInfo.id})
        res.json(removeFromDB)
    } catch (error) {
        res.json(error)
    }
})
router.get('/:locationId',async(req,res)=>{
    try {
        const post=await Locations.findById(req.params.locationId)
        res.json(post)
    } catch (error) {
        console.log("error",error)
        res.json(error)
    }
})
router.post('/weatherInfo',(req,res)=>{
    let location=req.body.locationInfo.cityName;
    axios
    .get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+process.env.weather_key)
    .then(response => {
    res.json(response.data)
    })
    .catch(error => {
    console.error(error)
    })
})
module.exports=router
