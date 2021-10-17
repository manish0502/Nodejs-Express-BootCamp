const express = require('express');
const router = express.Router();
const { register  ,login} = require('../controllers/auth')



// router.route('/dashboard')
//         .get(authMiddleware, dashboard)

router.route('/register')
            .post(register)
            
router.route('/login')
            .post(login)
            



router.get('/' ,(req, res) => {
    res.json({
        msg:"Hello from jobsAPI",
        status: 200
    })
})





module.exports = router;