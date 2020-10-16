const mongoose=require('mongoose');
const {db}=require('./../configuration/index.js');

module.exports.connectDB=()=>{
    console.log(db);
    mongoose.connect(db,{useNewUrlParser:true})
    return mongoose.connection
}