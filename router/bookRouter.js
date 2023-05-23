const express = require('express')
const router = express.Router()

const bookControler = require('../controllers/bookController')

router.get('/',bookControler.book)
router.get('/:id',bookControler.bookPorId)
router.get('/edit/:id',bookControler.bookEdit)
router.post('/update',bookControler.bookEditPost)

module.exports = router;