const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const app = express();
var logger = require('morgan')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const API = require('./routes/route')
const PORT = process.env.PORT || 5000;



// Connect Database

connectDB();

/*---------Intialize Middleware-----*/


app.use(express.static('./public'));
app.use(logger('dev'));
app.use(express.json({extended : false}));


/*------------Setup Of APIs-------------*/

app.use("/api/v1/products" ,API)
app.use(notFound);
app.use(errorHandlerMiddleware);





app.listen(PORT, ()=> {
    console.log(`Server is Running at port ${PORT}`);
})