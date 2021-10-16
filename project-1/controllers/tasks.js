const status = require("http-status");
const Task = require('../models/tasks')
const asyncWrapper= require('../middleware/async')



//    let getAllTasks (req , res , next) {

//       res.json({ 
//         msg:"This API to list all the tasks in this project",
//         status:200
//       })

//     },


//     getTask(req , res , next) {

//       res.json({ 

//         msg:"This API to get Single Task",
//         status:200

//       })

//     },

//     updateTask(req , res , next) {

//       res.json({ 
//         msg:"This API for update the single Task",
//         status:200
//       })

//     },


//     deleteTask(req , res , next) {

//       res.json({ 
//         msg:"This API for delete the single Task",
//         status:200
//       })

//     },

    

const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
      })
  

module.exports = {
       createTask
    }