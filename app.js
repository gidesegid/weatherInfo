const express=require('express');
const app=express();
let bodyParser = require('body-parser');
let router=require('./router/main');
let db=require('./db/db')
require('dotenv/config');
app.use(express.static(__dirname+'/public'));
app.use(express.static('./views/'));
// app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(router)
app.listen(3010,function(){
    console.log("The server, weather information detecter is running now on port 3010")
});

