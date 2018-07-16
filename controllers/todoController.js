const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://yezi:yezi0901@ds139251.mlab.com:39251/node-todolist');

//Create a sheme - this is like a blueprint
const todoScheme = new mongoose.Schema({
  item: String,
});

//Create a model
const Todo = mongoose.model('todolist', todoScheme);

module.exports = function(app) {

app.get('/todo', function(req, res){
  //get data from mongodb and pass it to view
  Todo.find({}, function(err, data) {
    if (err) {
      throw err
    };
    res.render('todo', {todos: data});
  });  //retrive all the items in the collection
});

app.post('/todo', urlencodedParser,function(req, res){
  // get the data from the view and add it to mongodb
  var newTodo = Todo(req.body).save(function(err, data) {
    if (err) throw err ;
    res.json(data);
  });
});

app.delete('/todo/:item', function(req, res){
  //delete the requested item from mongodb
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
    if (err) throw err;
    res.json(data);
  });
});  


};