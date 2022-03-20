const multer = require('multer')
const path = require('path')

//for setting storage => filename and destination
const storage = multer.diskStorage({
    //destination is used to upload folder
    destination: function (req, res, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file)

        //generates unique filename
        cb(null, 'congar' + '-' + Date.now() + path.extname(file.originalname))

    }
})

//file filter => we accept any file and we will do validation later

const fileFilter =(req,file,cb) =>{
    cb(null,true)
}

let upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

//export upload as single file you can use multiple

module.exports=upload.single('categoryImage')