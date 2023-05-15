const db = require('../db/bebidas')

const homeController ={
  lista:(req,res) =>{
    res.render('home',{db})
  }
}

module.exports = homeController;




    
  
   

