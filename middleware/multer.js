const multer = require('multer');
const path = require('path');

//multer


const storage = multer.memoryStorage()
const upload = multer({storage:storage})
  



  module.exports = upload;
