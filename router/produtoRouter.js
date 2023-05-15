const express = require ('express')
const router = express.Router()

const produtoController = require('../controllers/produtoController')

router.get('/produto/:id',produtoController.produto)

module.exports = router;