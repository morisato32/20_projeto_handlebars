// requerindo o express
const express = require("express");
//instânciando o express
const app = express();


//requerindo o template engine
const multer = require('./middleware/multer')
const exphbs = require("express-handlebars");

//flash mensagem
const flash = require('connect-flash')



//dotenv
const dotenv = require('dotenv')
dotenv.config()

//requerendo a session
const session = require('express-session')

//criando a session
const oneHour = 1000 * 60 * 60;
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: true,
  cookie: { maxAge: oneHour },
  saveUninitialized: true
}))

app.use(flash())

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  next()
})


app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});





//importando o roteador
const homeRouter = require('./router/homeRouter')
const searchRouter = require('./router/searchBookRouter')
const formRouter = require("./router/formRouter");
const bookRouter = require("./router/bookRouter");
const userRouter = require('./router/userRouter')

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
app.use(homeRouter)
app.use(searchRouter)
app.use(formRouter);
app.use("/books", bookRouter);
app.use('/user', userRouter)

// configurando a porta que o servidor vai rodar
app.listen(
  3000,
  console.log("Servidor rodando na porta 3000 e conectado ao banco!")
);
