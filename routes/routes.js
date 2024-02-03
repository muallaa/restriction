var express = require("express")

const path = require('path')

const multer = require('multer');


const storage_file = multer.diskStorage({
    destination : (req , file , cb) =>{
        cb(null , "public/uploads/")
    },
    filename : (req , file , cb) =>{
        
        cb(null , file.originalname)
    }
})

const upload = multer({storage : storage_file});

const storage_img = multer.diskStorage({
    destination : (req , file , cb) =>{
        cb(null , "public/profile/")
    },
    filename : (req , file , cb) =>{
     
        cb(null , file.originalname)
    }
})

const img_progile = multer({storage: storage_img});


var  UserController = require('../controllers/createContoller')
var  FileController = require('../controllers/FileController')
var  FolderController = require('../controllers/folderController')

const router = express.Router()

router.post('/create' , UserController.createAccount)
router.post('/login' , UserController.Login)
router.post('/upload_file' , upload.array('file') , FileController.UploadFile )
router.get('/get_info_user/:id' , UserController.getInfo)
router.put('/update_info_user/:id' , UserController.updateInfo)
router.put('/update_info_img_user/:id' , img_progile.single('img') , UserController.updateInfoImg)
router.get('/get_data_chart/:id' , FileController.chart_files)
router.post('/recent_file/:id' , FileController.recent_file)
router.get('/recent_file/:id' , FileController.recent_file)

router.post('/createFolder/:id' , FolderController.createFolder)
router.post('/getfolder/:id' , FolderController.getFolder)
router.get('/getfolder/:id' , FolderController.getFolder)

router.delete('/deleteFolder/:id' , FolderController.deleteFolder)
router.delete('/deleteFile/:id' , FileController.deleteFile)

router.put('/MoveFile/:id' , FileController.moveFile)

module.exports = router