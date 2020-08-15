const express = require('express')
const router = express.Router()

const {getUsers} = require('../controllers/UserControllers')

router.get('/users',getUsers)

module.exports = router;