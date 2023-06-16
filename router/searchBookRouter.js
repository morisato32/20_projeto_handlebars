const express = require('express')
const router = express.Router()

const searchBookController = require('../controllers/searchBookController')

router.get('/search',searchBookController.searchBook)

module.exports = router;