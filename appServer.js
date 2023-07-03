const express = require("express");
const APP_SERVER = express();
const bodyparser = require("body-parser");


// using body-parser 
APP_SERVER.use(bodyparser.urlencoded({extended: true}));
APP_SERVER.use(bodyparser.json());

// importing all routers
const CountriesRouter = require("./Controls/Countries.control");
const FilesRouter = require("./Controls/files.control");

// registering all controls
APP_SERVER.use("/countries",CountriesRouter);
APP_SERVER.use("/fileSystem",FilesRouter);



module.exports = APP_SERVER;