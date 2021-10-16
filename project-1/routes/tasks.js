const express = require('express');
const router = express.Router();
const  { createTask } = require('../controllers/tasks')
//const taskManagerController =require("../controllers/tasks")





router.route('/')
         .post(createTask)

// router.route('/')
//          .get(taskManagerController().getAllTasks)
//          .post(taskManagerController().createTask)


// router.route('/:id')
//          .get(taskManagerController().getTask)
//          .patch(taskManagerController().updateTask)
//          .delete(taskManagerController().deleteTask)




module.exports = router;