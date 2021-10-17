const express = require('express');
const app = express();

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

require('express-async-errors');
const connectDB = require('./config/db');
const AuthAPI = require('./routes/route')
const jobsRouter = require('./routes/jobs')
var logger = require('morgan')
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// Connect Database

connectDB();


/*---------Intialize Middleware-----*/

app.use(express.static('./public'));
app.use(logger('dev'));
app.use(express.json({extended : false}));
//app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());


/*------------Setup Of APIs-------------*/


app.use("/api/v1/auth" ,AuthAPI)
app.use('/api/v1/jobs', jobsRouter);





const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`Server is listening on ${PORT}`);
})
