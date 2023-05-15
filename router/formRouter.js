const express = require('express');
const router = express.Router()

const formController = require('../controllers/formController')



router.get('/form',formController.form)


module.exports = router;