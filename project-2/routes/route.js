const express = require('express');
const router = express.Router();
const { AllDetails } = require('../controllers/products')




router.route('/')
         .get(AllDetails)
        

// router.route('/:id')
//          .get(getTask)
//          .patch(updateTask)
//          .delete(deleteTask)




module.exports = router;