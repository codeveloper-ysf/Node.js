const express = require('express')
var exphbs  = require('express-handlebars');
const axios = require('axios');
const app = express()
 
app.get('/', function (req, res) {
  res.send('hello from backend to frontend!')
})
 
app.listen(3000)