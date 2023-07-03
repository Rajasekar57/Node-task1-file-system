const express = require("express");
const NODE_SERVER = express();
const APP_SERVER = require("./appServer");

const PORT = 7000;


// registering app server

NODE_SERVER.use("/", APP_SERVER);

try{
NODE_SERVER.listen(PORT,"localhost",()=>{
    console.log("SERVER STARTED", PORT);
});

} catch(error){
    console.log("ERROR OCCURED", error);
}
