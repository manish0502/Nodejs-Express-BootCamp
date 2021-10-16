const status = require("http-status");
const Product = require('../models/products')


const AllDetails= (req, res, next) => {

    res.json({ 
        msg:"This is from controller",
        status: status.OK,
    })
}

const getAllProductsStatic= (req, res, next) => {

    res.json({ 
        msg:"This is from getAllProductsStatic",
        status: status.OK,
    })
}

const getAllProducts= (req, res, next) => {

    res.json({ 
        msg:"This is from getAllProducts",
        status: status.OK,
    })
}




module.exports = { 
    AllDetails,
    getAllProductsStatic,
    getAllProducts
}