const router = require('express').Router();
const {
    addUser,
    loginUser,
    updateUser
} = require('../controllers/userController')

router.post('/register', addUser)

router.post('/login', loginUser)

router.put('/update/:id', updateUser)

module.exports = router;