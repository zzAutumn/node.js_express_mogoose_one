const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// require controller
const todoController = require('./controllers/todoController');

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);


app.get('/', function(req, res){
  res.send('hello this is home page');
});

//listen to port
app.listen('3000');