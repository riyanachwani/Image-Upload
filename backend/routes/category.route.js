const express = require("express")
const router = express.Router()

//using multer
const uploadMulter = require('../middlewares/upload.js')

//Validation
const validation = require('../middlewares/validation.js')


//controller
const {createCategory} = require('../controller/category.contoller')


router.post('/category',uploadMulter, validation, createCategory)


module.exports = router