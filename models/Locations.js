const mongoose=require('mongoose');
const LocationSchema=mongoose.Schema({
   city:{
       type:String,
       require:true
   }
})
module.exports=mongoose.model('Locations',LocationSchema);