const createConnecte = require('../conection/conexao')


const homeController = {
    home: (req, res) => {
        const searchQuery = req.query.search
        if (searchQuery) {
            res.redirect(`/search?search=${searchQuery}`);
        }
        
         else {
            
            const sql = `SELECT * FROM books ORDER By idbooks DESC LIMIT 8 `

            createConnecte.query(sql, (error, data) => {
                if (error) {
                    console.log(`Ouve um erro para trazer os livros mais recentes: ${error}`)
                } else {
                    
                    const booksRecentes = data
                   
                    // Renderizando a view com a mensagem de sucesso
                    
                        const successMessage = req.flash('success')[0];
                    res.render('home', { booksRecentes, successMessage:successMessage });
                    
                    
                    
                    
                }
            })


        }
    }


}

module.exports = homeController;