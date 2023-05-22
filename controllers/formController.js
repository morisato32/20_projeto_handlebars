const createConnecte = require("../conection/conexao");

const formController = {
  formVisualizar: (req, res) => {
    res.render("form")
  },

  formPost: (req, res) => {
    const titulo = req.body.titulo;

    const pagina = req.body.pagina;

    //criando a query para inserção de dados
    const sql = `INSERT INTO books (titulo,pagina) VALUES ('${titulo}','${pagina}');`;

    // inserindo dados na tabela
    createConnecte.query(sql, (error) => {
      if (error) {
        console.log(`Ouve um erro para salvar os dados, ${error}`);
      } else {
        res.redirect("/books");
      }
    })
  }


}

module.exports = formController;
