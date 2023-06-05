const createConnecte = require('../conection/conexao')

const bookControler = {
    book: (req, res) => {
        const sql = `SELECT * FROM  books`
        createConnecte.query(sql, (error, data) => {
            if (error) {
                console.log(`Ouve um erro para visualizar os livros, ${error}`)
            } else {
                const book = data
               
                res.render('home', { book })
            }
        })
    },
    bookPorId: (req, res) => {
        const id = req.params.id

        const sql = `SELECT * FROM books WHERE idbooks = ${id}`
        createConnecte.query(sql, (error, data) => {
            if (error) {
                console.log(`Ouve um erro para selecionar um livro, ${error}`)
            } else {
                const book = data[0]
                res.render('book', { book })
            }
        })
    },

    bookEdit: (req, res) => {
        const id = req.params.id
        const sql = `SELECT * FROM books WHERE idbooks = ${id}`
        createConnecte.query(sql, (error, data) => {
            if (error) {
                console.log(`Ouve um erro na edição, ${error}`)
            } else {
                const book = data[0]
                res.render('editbook', { book })
            }
        })
    },
    bookEditPost: (req, res) => {
        const {idbooks,titulo,pagina,autor} = req.body
       

        const sql = `UPDATE books SET titulo = '${titulo}',pagina = '${pagina}',autor = '${autor}' WHERE idbooks = ${idbooks}`
        createConnecte.query(sql, (error) => {
            if (error) {
                console.log(`Ouve um erro para atualizar dados do livro, ${error}`)
            } else {
                res.redirect('/books')
            }
        })
    },
    bookDeletePost: (req, res) => {
        const id = req.params.id

        const sql = `DELETE FROM books WHERE idbooks = ${id}`

        createConnecte.query(sql, (error) => {
            if (error) {
                console.log(`Ouve um erro para deletar um livro, ${error}`)
            } else {

                res.redirect('/books')
            }
        })
    }

}

module.exports = bookControler;