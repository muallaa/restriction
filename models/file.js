const mongoose = require('mongoose')

const Schema = mongoose.Schema
//========files

const files = new Schema({
    file :{
        type : String,
        required : true,
    },
    size : {
        type : String,
        required : true,
    },
    suffix : {
        type : String,
        required : true,
    },
    id_user : {
        type : String,
        required :true,
    },
    id_folder :{
        type : String,
        required : false
    }
} , {timestamps : true})

const file = mongoose.model('files' , files)

module.exports = {file} 