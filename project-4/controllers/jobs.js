const Job = require('../models/job')
const asyncWrapper = require("../middleware/async");
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')




const getAllJobs = async (req , res ,next)=>{

   // const { id :jobID } = req.user.userId;

    const Jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');

    if(!Jobs){
        res.send("No job Listed")
    }

    res.json({ 
        msg:" List of Jobs",
        Details: Jobs,
        Count: Jobs.length,
        status:StatusCodes.OK
    })
}


const getJob = async (req , res)=>{
    res.json({ 
        msg:" get a job",
        status:200
    })
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
  }

// const createJob = async (req , res)=>{

//     //req.body.createdBy = req.user.userId
//     const Job = await Job.create({...req.body})
//     res.json({ 
//         msg:" create a job",
//         status:StatusCodes.CREATED
//     })
// }

const updateJob = async (req , res)=>{
    res.json({ 
        msg:" update a job",
        status:200
    })
}


const deleteJob = async (req , res)=>{
    res.json({ 
        msg:" delete a job",
        status:200
    })
}


module.exports =
   {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob


  }