const express = require('express');
const router = express.Router();
const { login, dashboard } = require('../controllers/main')
const authMiddleware = require('../middleware/auth')


router.route('/dashboard')
        .get(authMiddleware, dashboard)

router.route('/login')
            .post(login)



router.get('/' ,(req, res) => {
    res.json({
        msg:"Hello from router",
        status: 200
    })
})





module.exports = router;