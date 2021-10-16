const express = require('express');
const router = express.Router();


const { AllDetails } = require('../controllers/products')


// const  {  
//     getAllTasks,
//     getTask,
//     updateTask,
//     deleteTask,
//     createTask 
//      } = require('../controllers/tasks')




router.route('/')
         .get(AllDetails)
        


// router.route('/:id')
//          .get(getTask)
//          .patch(updateTask)
//          .delete(deleteTask)




module.exports = router;