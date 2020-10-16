const express=require('express');
const { connectDB } = require('../helpers/helper');
const {port,host}= require('../configuration/index');
const app=express()

const  startServer=()=>{
    app.listen(port,()=>{
        console.log(`API Server is working on port ${port}`);
        console.log(`Host is ${host}`)
    })
}
app.get('/test',(req,res)=>{
    res.send("Server is working correctly auth");
});


connectDB()
.on('error',console.error.bind(console,'connection error:'))
.on('disconnected',connectDB)
.once('open', startServer)
