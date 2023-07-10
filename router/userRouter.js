const express = require('express')

const router = express.Router()

const upload = require('../middleware/multer')

const bcrypt = require('bcrypt')

const sharp = require('sharp')

const fs = require('fs')

//flash mensagem
const flash = require('connect-flash')
const createConnecte = require('../conection/conexao')
const userController = require('../controllers/userController')


router.get('/cadastrar', userController.cadastrarView)
router.post('/cadastrar', upload.single('imagem'), async (req, res) => {

    const errors = []

    const { nome, senha, email, confirmpassword } = req.body

    const hash = bcrypt.hashSync(senha, 12)

    const file = req.file

    let session = req.session

    // Verificar se o email já está cadastrado e validar o formulario
    createConnecte.query('SELECT email FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta:', err);
            return
        } if (results.length === 1) {
            errors.push('E-mail já cadastrado')
           

        } if (senha != confirmpassword) {
            errors.push('As senhas não são iguais, tente novamente!')
           
        } if (nome === '' || nome === null || typeof nome === 'undefined') {
            errors.push('O campo nome deve ser preenchido!')
           
        } if (nome.length < 3) {
            errors.push('O nome não pode ter menos de 3 caracteres')
            
        }  // Expressão regular para verificar se o nome contém apenas letras


        if (!/^[a-zA-Z]+$/.test(nome)) {
            errors.push('O nome não pode conter números ou caracteres especiais!')
           
        }  // campo email
        if (email === '' || email === null || typeof email === 'undefined') {
            errors.push('O campo email deve ser preenchido!')
           
        }

        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        if (!emailRegex.test(email)) {
            errors.push('O email deve estar em um formato válido')
           
        }

        // campo senha
        if (senha === '' || senha === null || typeof senha === 'undefined') {
            errors.push('O campo senha deve ser preenchido!')
           
        }
        if (!/[!@#$%]/.test(senha)) {
            errors.push("A senha deve conter pelo menos um caractere especial")
           
        }
        if (senha.length < 8) {
            errors.push("A senha deve ter pelo menos 8 caracteres")
           
        }

        if(errors.length > 0){
            res.render('cadastrar',{errors})
            return
        }else{
            if (!file) {
                // Obtendo o código base64 da imagem
                const imageBuffer = fs.readFileSync('public/img/perfil.webp');
                const base64Image = imageBuffer.toString('base64');
    
                // Definindo a imagem padrão na sessão
                const imgPadrao = req.session.imagem = `${base64Image}`;
                // Realizar o cadastro do usuario sem imagem do perfil
                createConnecte.query('INSERT INTO users (nome,email,senha,imagem) VALUES (?,?,?,?)', [nome, email, hash, imgPadrao], (err) => {
                    if (err) {
                        console.error('Erro ao cadastrar usuario:', err);
                    }
                    req.flash('success', 'Cadastro realizado com sucesso!');
                    res.redirect('/');
                });
            }
    
}})
    
    
    
        // Realizar o cadastro do usuario com imagem do perfil
        if (file) {
            const resizedImage = await sharp(req.file.buffer).resize({ width: 500 }).toBuffer()
            const imagem = session.imagem = resizedImage.toString('base64')
            createConnecte.query('INSERT INTO users (nome,email,senha,imagem) VALUES (?,?,?,?)', [nome, email, hash, imagem], (err) => {
                if (err) {
                    console.error('Erro ao cadastrar usuario:', err);
                } else {
                    req.flash('success', 'Cadastro realizado com sucesso!');
                    res.redirect('/');
                }
            });
        }
        }


       


)
router.get('/logout', userController.logout)
router.get('/login', userController.loginView)
router.post('/login', userController.loginPost)
router.get('/edit', userController.edituser)


module.exports = router