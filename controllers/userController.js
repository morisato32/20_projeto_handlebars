const createConnecte = require('../conection/conexao')
const bcrypt = require('bcrypt')

const userController = {

    cadastrarView: (req, res) => {
        const searchQuery = req.query.search
        if (searchQuery) {
            res.redirect(`/search?search=${searchQuery}`);

        } else {
            res.render('cadastrar')
        }

    },
    logout: (req, res) => {
        if (req.session.imagem || !req.session.imagem) {

            req.session.destroy((err) => {
                if (err) {
                    console.log('Erro ao destruir a sessão:', err);
                } else {
                    res.redirect('/user/login');
                }
            });
        }


    },

    edituser: (req, res) => {
        res.render('edituser')
    },

    loginView: (req, res) => {
        const searchQuery = req.query.search
        const session = req.session


        if (searchQuery) {
            res.redirect(`/search?search=${searchQuery}`);

        }
        else {
            res.render('login')
        }
    },
    loginPost: (req, res) => {


        const errors = []

        // validar o email e a senha fornecidos pelo usuário
        const { email, senha } = req.body




        // Verificar se o email já está cadastrado
        createConnecte.query('SELECT senha,imagem FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                console.error('Erro ao executar a consulta:', err);
                return;
            }

            if (results.length === 0) {
                errors.push('Usuario não encontrado!');
                res.render('login', { errors })
                return;
            }

            const senhaHash = results[0].senha;
            if (results[0].imagem) {
                const imagePath = results[0].imagem

                if (bcrypt.compareSync(senha, senhaHash)) {
                    // sessão ativa
                    req.session.imagem = imagePath;
                    res.redirect('/');
                } else {
                    errors.push('Senha incorreta!');
                    res.render('login', { errors });
                    return;
                }
            } 
        }
        )
    }
}
module.exports = userController;