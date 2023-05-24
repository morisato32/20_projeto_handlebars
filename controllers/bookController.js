const createConnecte = require('../conection/conexao')

const bookControler = {
    book: (req, res) => {
        const sql = `SELECT * FROM  books`
        createConnecte.query(sql, (error, data) => {
            if (error) {
                console.log(`Ouve um erro para visualizar os livros, ${error}`)
            } else {
                const book = data
                res.render('books', { book })
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
        const id = req.body.idbooks

        const titulo = req.body.titulo

        const pagina = req.body.pagina


        const sql = `UPDATE books SET titulo = '${titulo}',pagina = '${pagina}' WHERE idbooks = ${id}`
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