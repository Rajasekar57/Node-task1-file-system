const CountriesRouter = require("express").Router();

// CountriesRouter.get("/getAllcountries", function(req,res,next) {
//     res.status(200).json({
//  message:"Rest countries api is under process",
//     });
// });
CountriesRouter.post("/savecountries", function(req,res,next) {
        console.log(req.body);
        
    });



module.exports = CountriesRouter;