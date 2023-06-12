const express = require('express');
const router = express.Router()
const upload = require('../middleware/multer')
const sharp = require('sharp');
const createConnecte = require('../conection/conexao')

// controller
const formController = require('../controllers/formController');


router.get('/form',formController.formVisualizar)


router.post('/book/cadastrado',upload.single('file'),async (req,res) =>{
    const {titulo,pagina,autor,descricao} =  req.body
    const resizedImage = await sharp(req.file.buffer).resize({ width: 500 }).toBuffer()
    const imagem = resizedImage.toString('base64');

    const sql = `INSERT INTO books (titulo, pagina, autor,descricao, imagem) VALUES (?,?,?,?,?)`
    createConnecte.query(sql,[titulo,pagina,autor,descricao,imagem],(err,result)=>{
        if(err){
            console.log(`Erro ao inserir imagem no banco de dados:${err}`)
        }else{
            res.redirect('/books')
        }
    })
})
 






module.exports = router;