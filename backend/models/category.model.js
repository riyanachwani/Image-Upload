const mongoose = require ('mongoose');


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    },
},{timestamp:true});

const model = mongoose.model('UserData',categorySchema,'UserData');

module.exports=model;