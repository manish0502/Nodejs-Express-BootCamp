const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./config/db');
var logger = require('morgan')
const API = require('./routes/tasks')

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



const PORT = process.env.PORT || 5000;


// Connect Database

connectDB();

/*---------Intialize Middleware-----*/


app.use(express.static('./public'));
app.use(logger('dev'));
app.use(express.json({extended : false}));


/*------------Setup Of APIs-------------*/

app.use("/api/v1/tasks" ,API)
app.use(notFound);
app.use(errorHandlerMiddleware);


/*-----------Define Port---------------*/

app.listen(PORT ,()=>{
    console.log(` Server is Listening on port ${PORT}`)
})





