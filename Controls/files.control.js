const FilesRouter = require("express").Router();
const filesystem = require("fs");
const path = require("path");
const{getfileName} = require("../utils/calendar");


FilesRouter.post("/createFile", function(req,res,next) {
    const path =  `./fileSystem/${getfileName(new Date())}`;
    console.log(path);
    try{
        filesystem.writeFileSync(path , "New file");
        return res.status(200).json({
            message:"File created successfully!!!",
        });

    } catch(error){
        return res.status(501).json({
            message:"Error in creating File###",
        });
    }
});

module.exports=FilesRouter;