const status = require("http-status");
const Product = require('../models/products')


const AllDetails= (req, res, next) => {

    res.json({ 
        msg:"This is from controller",
        status: status.OK,
    })
}




module.exports = { 
    AllDetails
}