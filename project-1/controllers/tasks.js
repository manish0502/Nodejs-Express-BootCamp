const status = require("http-status");
const Task = require('../models/tasks')
const asyncWrapper= require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')




   const getAllTasks =  asyncWrapper(async (req, res) => {

       const tasks = await Task.find({})
         res.status(status.OK).json({ 
           msg:"The list is fetched successfully",
           status:status.OK,
           body:tasks
          })
   })

  const getTask =asyncWrapper(async (req, res, next) => {
      const { id } = req.params
      const task = await Task.findOne({ _id: id })
       if (!task) {
          return next(createCustomError(`No task with id : ${id}`, status.NOT_FOUND))
       }
  
         res.status(status.OK).json({ 
           
            msg:`Task with id : ${id} found successfully`,
            staus:status.Found,
            body:task
          })
  })

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
        res.status(status.CREATED).json({
          msg:"A new Task has been created successfully",
          status: status.CREATED,
          body: task
         })
      })
  

  module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask,

    }