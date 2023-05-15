
const mysql = require("mysql2");

// configurando a porta que o servidor vai rodar e connectando o banco

const createConnecte = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1986P@ulo",
  database: "mysqlnode",
});

createConnecte.connect((error) => {
  if (error) {
    console.log(`Ouve um erro na conexão, ${error}`);
  }
});

module.exports = createConnecte;
