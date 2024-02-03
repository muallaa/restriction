const {Folders} = require('../models/folder')

const models = require('../models/file')

const fs = require('fs')

const path = require('path')

const createFolder = async (req , res)=>{

    const id_user = req.params.id

    const {name , id_folder} = req.body

    await new Folders({ name : name , id_user : id_user , id_folder : id_folder}).save().then( (data)=>{
        res.json({'status' : true})
    })
  
    
}

const getFolder = async (req , res) =>{

    const id_user = req.params.id

    if(req.body.hasOwnProperty('id_folder')){
        const {id_folder} = req.body


        await  Folders.find({id_user : id_user , id_folder : id_folder}).sort({createdAt : -1}).then( (data)=>{
            res.json(data)
        })
    }else{
        await  Folders.find({id_user : id_user}).sort({createdAt : -1}).then( (data)=>{
            res.json(data)
        })
    }
  
}

const deleteFolder = async (req , res) =>{

    const id = req.params.id

    await Folders.deleteOne({_id : id})

    await models.file.find({id_folder : id}).then( async (data) =>{

        for(var i = 0 ; i< data.length ; i++){
            const dir = path.join('public' , 'uploads' , data[i].file)
        
            fs.unlink(dir , (err)=>{
                console.log(err)
            })
            
            await models.file.deleteOne({_id : data[i]._id})
        }

        await Folders.find({id_folder : id}).then( async (data) =>{
           
            for(var i = 0 ; i< data.length ; i++){
                await Folders.deleteOne({_id : data[i]._id})

                await models.file.find({id_folder : data[i]._id}).then( async (data) =>{

                    for(var i = 0 ; i< data.length ; i++){
                        const dir = path.join('public' , 'uploads' , data[i].file)
                    
                        fs.unlink(dir , (err)=>{
                            console.log(err)
                        })
                        
                        await models.file.deleteOne({_id : data[i]._id})
                    }
            })
    
            
           
        }})
    

       
    })

    res.json({'success' : true})
}


module.exports = { createFolder , getFolder , deleteFolder }

