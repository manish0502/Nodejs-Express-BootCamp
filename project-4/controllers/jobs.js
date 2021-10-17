const getAllJobs = async (req , res)=>{
    res.json({ 
        msg:" this from get all jobs",
        status:200
    })
}


const getJob = async (req , res)=>{
    res.json({ 
        msg:" get a job",
        status:200
    })
}


const createJob = async (req , res)=>{
    res.json({ 
        msg:" create a job",
        status:200
    })
}

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