// no roteador temos que importa o express
const express = require('express');
const homeController = require('../controllers/homeController');
// instânciar o roteador
const router = express.Router()

//criar a rota
router.get('/',homeController.lista)

    


//exportar o roteador
module.exports = router;