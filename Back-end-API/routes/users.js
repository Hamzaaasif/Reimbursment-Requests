const express = require('express')
const router = express.Router()

const {getUsers} = require('../controllers/UserControllers')

router.get('/',getUsers)

module.exports = router;