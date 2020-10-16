const mongoose=require('mongoose');
const {db}=require('../configuration/index');

module.exports.connectDB=()=>{
    console.log(db);
    mongoose.connect(db,{useNewUrlParser:true})
    return mongoose.connection
}