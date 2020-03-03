
const mongoose=require('mongoose')
function db(){
    mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true },(error)=>{
        if(!error){
         console.log("You are successfully connected to mongodb!!!!! ")
        }else{
         console.log("You are not connected to mongodb yet!")
        }
    })
}
module.exports=db()

