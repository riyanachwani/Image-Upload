const express = require("express")
const app = express()
const mongoose = require('mongoose')

const morgan =require("morgan") //to get info for each request

const bodyParser= require("body-parser")
app.use('/uploads',express.static('uploads'))
//uses upload folder to save images

//const image = require('./models/image')
const cors = require('cors')


const path=require("path")

app.use(cors())


app.use(express.json()) //To let app know that we will be using json

mongoose.connect(
    "mongodb+srv://riya:12345@cluster0.22yzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);
    
//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.use('/api',require('./routes/category.route.js'))

app.use((req,res) =>{
    res.status(404).json({
        errors:"page not found"
    })
})


const POST = process.env.PORT || 3001;

app.listen(POST, () => {
        console.log("server started")
    })