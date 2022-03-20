const fs=require('fs');
module.exports = (req,res,next) =>
{
    //first we will save category name and image
    //valid req.body or req.file not get undefined
    console.log(req.file);
    if(typeof(req.file) ==='undefined' || typeof(req.body)==='undefined'){
        //if error
        return res.status(400).json({
            errors:"Problem with sending data"
        })
    }

    //get image and name
    console.log(req.file);
    let name = req.body.name
    let image= req.file.path


    //Check type of img we will access
    if(!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('jpg') &&!(req.file.mimetype).includes('png')){

        //first remove file
        fs.unlinkSync(image)
        return res.status(400).json({
            errors:"File is not supported"
        })
    }

    //Checking filesize
    if(req.file.size > 1024 * 1024 * 5){
                //first remove file
                fs.unlinkSync(image)
                return res.status(400).json({
                    errors:"File too large"
                })
    }

    //To check if filed is empty
    if(!name || !image){
        return res.status(400).json({
            errors:"All field are required"
        })
    }
    
    next()
}