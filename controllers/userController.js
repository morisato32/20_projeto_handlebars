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

    loginView: (req, res) => {
        const searchQuery = req.query.search
        if (searchQuery) {
            res.redirect(`/search?search=${searchQuery}`);

        }
        else {
            res.render('login')
        }
    },
    loginPost: (req, res) => {
        let session = req.session

        const errors = []
       
        

        // validar o email e a senha fornecidos pelo usuário
        const email = session.email = req.body.email
        
        const senha = session.senha = req.body.senha
        

        // selecionar o usuário com base no email e a senha
        const sql = 'SELECT * FROM users WHERE email = ?';
        createConnecte.query(sql, [email], (error, results) => {
            if (error) {
                console.log(`Erro para validar um usuario:${error}`)
            } else {

                const hash = results[0].senha;

                // verificar se a senha fornecida corresponde ao hash salvo no banco de dados
                const result = bcrypt.compareSync(senha, hash);
               


                if (result) {
                   req.flash('success','login realizado com sucesso!') 
                   res.redirect('/')

                    

                }else if(!result){
                    errors.push('senha incorreta!')
                    res.render('login',{errors:errors})
                    console.log(errors)
                }
                   
            }
        }
        )
    }
}



module.exports = userController;