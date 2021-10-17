const express = require('express');
const app = express();
require('express-async-errors');
const connectDB = require('./config/db');
const jobAPI = require('./routes/route')
var logger = require('morgan')
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Connect Database

connectDB();


/*---------Intialize Middleware-----*/

app.use(express.static('./public'));
app.use(logger('dev'));
app.use(express.json({extended : false}));
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);



/*------------Setup Of APIs-------------*/

app.get('/' ,(req, res) => {
    res.json({
        msg:"Hello from router",
        status: 200
    })
})

app.use("/api/v1/jobs" ,jobAPI)




const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`Server is listening on ${PORT}`);
})
