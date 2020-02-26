const express=require('express');
const app=express();
let bodyParser = require('body-parser');
let router=require('./router/main')
const axios = require('axios')
require('dotenv/config');
const mongoose=require('mongoose')
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true },(error)=>{
    if(!error){
     console.log("You are successfully connected to mongodb! ")
    }else{
     console.log("You are not connected to mongodb yet!")
    }
})
app.use(express.static(__dirname+'/public'));
app.use(express.static('./views/'));
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(router)
app.listen(3010,function(){
    console.log("The server, weather information detecter is running now on port 3010")
});

