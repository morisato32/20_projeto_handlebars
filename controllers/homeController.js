const createConnecte = require('../conection/conexao')

const homeController = {
    home : (req,res) =>{
        
        const sql = `SELECT * FROM books ORDER By idbooks DESC LIMIT 8 `

        createConnecte.query(sql,(error,data) =>{
            if(error){
                console.log(`Ouve um erro para trazer os livros mais recentes: ${error}`)
            }else{
                const booksRecentes = data
               
                res.render('home',{booksRecentes})
            }
        })

        
    }
}

module.exports = homeController;