const createConnecte = require("../conection/conexao");

const formController = {
  form: (req, res) => {
    const titulo = req.body.titulo;
    const pagina = req.body.pagina;

    const sql = `INSERT INTO books (titulo,pagina) VALUES ("${titulo}","${pagina}")`;

    createConnecte.query(sql);
    res.render("form");
  },
};

module.exports = formController;
