
const { model } = require('mongoose')

const models = require('../models/file')

const fs = require('fs')

const path = require('path')

const UploadFile = async(req ,  res )=>{
  
     for(var i =0 ; i< req.files.length ; i++){

         const info = new models.file({file : req.files[i].originalname , size : req.files[i].size , suffix : /[^.]+$/.exec(req.files[i].originalname)[0] , id_user : req.body.id_user , id_folder : req.body.id_folder})

         info.save()

     }

     res.json({'success' : true})
   
}

const chart_files = async (req , res)=>{

    const id = req.params.id

    await models.file.find({id_user : id}).then( (data) =>{
        res.json(data)
    })
}

const recent_file = async (req , res) =>{

    const id = req.params.id

    if(req.body.hasOwnProperty('id_folder')){

        const {id_folder} = req.body

        await models.file.find({id_user : id , id_folder : id_folder}).sort({ createdAt: -1 }).limit(10).then( (data)=>{
            res.json(data)
        })

    }else{

        await models.file.find({id_user : id}).sort({ createdAt: -1 }).limit(10).then( (data)=>{
            res.json(data)
         })
    }
  
}

const deleteFile = async(req , res)=>{

    const id = req.params.id

   
    await models.file.find({_id : id}).then( async (data) =>{
        const dir = path.join('public' , 'uploads' , data[0].file)
        
        fs.unlink(dir , (err)=>{
            console.log(err)
        })
        
        await models.file.deleteOne({_id : id}).then((d)=>{
            res.json(d)
            
        })
    })

   
}

const moveFile = async(req , res)=>{

    

    
    

    await models.file.updateOne( {_id : req.body.file_id} , {id_folder : req.params.id}).then( (data)=>{
        res.json({success : data})
    } )
}

module.exports = {UploadFile , chart_files , recent_file , deleteFile , moveFile}
