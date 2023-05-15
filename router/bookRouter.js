const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController')

router.get('/book',bookController.book)
router.post('/book/cadastro',bookController.book)

module.exports = router