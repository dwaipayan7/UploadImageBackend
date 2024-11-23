const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        required:false,
        unique:true
    },
    phone:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    }

 

});

module.exports = mongoose.model("Student", studentSchema)