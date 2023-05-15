const db = require("../db/bebidas");
const produtoController = {
  produto: (req, res) => {
    const produto = db[parseInt(req.params.id) - 1];

    res.render("produto", { produto });
  },
};

module.exports = produtoController;
