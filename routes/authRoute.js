// importing required library
const express = require('express')
const { handleRegisterUser, handleLoginUser, handleLogOutUser } = require('../controllers/UserController')

// create instance of the Router from expresss
const router = express.Router()

// define routes for /api/v1/auth
router.post('/user/login', handleLoginUser)

router.post('/user/register', handleRegisterUser)

module.exports = router;