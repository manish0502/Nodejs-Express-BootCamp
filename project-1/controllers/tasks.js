function taskManagerController() {

  return  {

    getAllTasks(req , res , next) {

      res.json({ 
        msg:"This API to list all the tasks in this project",
        status:200
      })

    },


    getTask(req , res , next) {

      res.json({ 

        msg:"This API to get Single Task",
        status:200

      })

    },

    updateTask(req , res , next) {

      res.json({ 
        msg:"This API for update the single Task",
        status:200
      })

    },


    deleteTask(req , res , next) {

      res.json({ 
        msg:"This API for delete the single Task",
        status:200
      })

    },

    createTask(req , res , next) {

      res.json({ 

        msg:"This API to create Tasks from Controllers",
        status:200

      })
    }


      

  }
}

module.exports = taskManagerController;