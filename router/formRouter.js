const express = require('express');
const router = express.Router()

const formController = require('../controllers/formController')


router.get('/form',formController.formVisualizar)
router.post('/book/cadastrado',formController.formPost)



module.exports = router;