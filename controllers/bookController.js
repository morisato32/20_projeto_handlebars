const createConnecte = require("../conection/conexao");

const bookController = {
  book: (req, res) => {
    const sql = `SELECT * FROM books`;
    createConnecte.query(sql, (error, data) => {
      if (error ) {
        console.log(`Ouve um erro para visualizar os livros, ${error}`);
      }
      const book = data;
     console.log(book)
     res.render('book',{book})
    });

    
  },
};

module.exports = bookController;
