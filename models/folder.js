const mongoose = require('mongoose')

const Schema = mongoose.Schema

const folders = new Schema({
    name : {
        type : String,
        required : true
    },

    id_user : {
        type : String,
        required : true
    },

    id_folder : {
        type : String,
        required : true
    }

}, {timestamps : true})

const Folders = mongoose.model('folders' , folders)

module.exports = {Folders}