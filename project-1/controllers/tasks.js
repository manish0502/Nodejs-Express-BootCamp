const status = require("http-status");
const Task = require('../models/tasks')
const asyncWrapper= require('../middleware/async')



   const getAllTasks = (req , res , next) => {

      res.json({ 
        msg:"This API to list all the tasks in this project",
        status:200
      })

    };


  const getTask = (req , res , next)  => {

      res.json({ 

        msg:"This API to get Single Task",
        status:200

      })

    };

  const updateTask = (req , res , next) => {

      res.json({ 
        msg:"This API for update the single Task",
        status:200
      })

    };


  const deleteTask = (req , res , next) => {

      res.json({ 
        msg:"This API for delete the single Task",
        status:200
      })

    };

    

  const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
      })
  

  module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask,

    }