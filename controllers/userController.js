const createConnecte = require('../conection/conexao')

const userController = {
    cadastrarView: (req, res) => {
        const searchQuery = req.query.search
        if (searchQuery) {
            res.redirect(`/search?search=${searchQuery}`);

        }
        else{
            res.render('cadastrar')
        }
    },
    loginView : (req,res) =>{
        const searchQuery = req.query.search
        if (searchQuery) {
            res.redirect(`/search?search=${searchQuery}`);

        }
        else{
            res.render('login')
        }
    }
}

module.exports = userController;