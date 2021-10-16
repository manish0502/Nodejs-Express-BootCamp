const express = require('express');
const router = express.Router();
const taskManagerController =require("../controllers/tasks")




router.route('/')
         .get(taskManagerController().getAllTasks)
         .post(taskManagerController().createTask)


router.route('/:id')
         .get(taskManagerController().getTask)
         .patch(taskManagerController().updateTask)
         .delete(taskManagerController().deleteTask)




module.exports = router;