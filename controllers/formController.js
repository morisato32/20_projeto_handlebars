const createConnecte = require("../conection/conexao");

const formController = {
  formVisualizar: (req, res) => {
    const searchQuery = req.query.search 
    if(searchQuery){
        res.redirect(`/search?search=${searchQuery}`);
      }
  
    res.render("form")
  },

};

module.exports = formController;
