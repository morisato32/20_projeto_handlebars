const mysql = require("mysql2");
const express = require('express')
const  dotenv = require('dotenv')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
dotenv.config()

const createConnecte = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database:process.env.DBNAME,
});


createConnecte.connect((error) => {
  if (error) {
    console.log(`Ouve um erro na conexão, ${error}`);
  }
});




module.exports = createConnecte;
