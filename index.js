// requerindo o express
const express = require("express");
//instânciando o express
const app = express();
//requerindo o template engine
const exphbs = require("express-handlebars");

//mysql


//importando o roteador
const homeRouter = require("./router/homeRouter");
const produtoRouter = require("./router/produtoRouter");
const formRouter = require('./router/formRouter')
const bookRouter = require('./router/bookRouter')

const hbs = exphbs.create({ partialDIr: ["views", "partials"] });

//template engine utilizada
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

//pegando requisição do body do formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//arquivos estáticos
app.use(express.static("public"));

//chamando o roteador
app.use(homeRouter);
app.use(produtoRouter);
app.use(formRouter)
app.use(bookRouter)

// configurando a porta que o servidor vai rodar 

app.listen(3000,console.log("Servidor rodando na porta 3000 e conectado ao banco!"))
