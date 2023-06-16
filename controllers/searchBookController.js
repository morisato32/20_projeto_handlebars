const createConnecte = require ('../conection/conexao')

const searchBookController ={
    searchBook : (req,res) =>{
        const search = req.query.search // Obtém o termo de pesquisa da query string
        
        const sql = `SELECT * FROM books WHERE titulo LIKE '%${search}%' OR autor LIKE '%${search}%'`

        createConnecte.query(sql,(error,results) =>{
            if(error){
                console.log(`Ouve um erro para buscar o livro,${error}`)
            }
            res.render('search',{books:results})
            
        })
        
    }
}

module.exports = searchBookController;