process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
require('dotenv').config()
const config = require('config') ;
const mongoose =require('mongoose');
const url = process.env.MONGO_URI 



const connectDB = async ()=>{
    try{
        await mongoose.connect(url,
            { 
                useUnifiedTopology: true ,
                useNewUrlParser: true ,
                useCreateIndex:true ,
            
                
            });
        console.log('MongoDB Connected .....')

    }catch(err){

        
        console.error(err.message);
        //Exit process with Failure
        process.exit(1);

    }
}



module.exports =connectDB;