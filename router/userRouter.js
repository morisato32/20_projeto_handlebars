const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')

router.get('/cadastrar',userController.cadastrarView)
router.get('/login',userController.loginView)


module.exports = router