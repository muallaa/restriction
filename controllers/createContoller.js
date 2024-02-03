const { model } = require('mongoose')

const models = require('../models/create')

const createAccount = async (req , res) =>{
    
    
    
    
    const info = new models.create(req.body)

   if(await models.create.exists({email : req.body.email}) ){
    res.json({status : 0 , message : 'email exist' })
   }else{
        info.save()
            .then(result =>{
                res.json({status : 1 , info : info })
            })
            .catch(err =>{
                res.json({ status : 0 , message : 'invaild signup ! ..' })
            }) 
        }
}


const Login = async (req , res) =>{

        if(await models.create.exists({ email : req.body.email , password : req.body.password})){

            await models.create.findOne({email : req.body.email , password : req.body.password}).then( (data) =>{
                res.json({ status : 1 , info :data})
               })
         
        }else{
            res.json({ status : 0 , message : 'this account is not exist'})
        }
}

const getInfo = async (req , res)=>{
   
    const {id} = req.params
     await models.create.findById(id).then((data)=>{
         res.json({ 'info' : data})
     })
}

const updateInfo = async (req , res)=>{

    const  id  = req.params.id

    await models.create.updateOne( {_id : id} , req.body).then( (data) =>{
        res.json(data)
    })

}

const updateInfoImg = async (req , res) =>{
    console.log(req.file.originalname)
    const  id  = req.params.id
    await models.create.updateOne( {_id : id} , {img : req.file.originalname }).then( () =>{
         models.create.findById(id).then((data)=>{
            res.json({ 'info' : data})
        })
    })
}

module.exports = { createAccount , Login , getInfo , updateInfo , updateInfoImg}