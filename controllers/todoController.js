const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

var data = [
  {item: 'get milk',},
  {item: 'walk dog',},
  {item: 'kick some coding ass',}
];

module.exports = function(app) {

app.get('/todo', function(req, res){
  res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser,function(req, res){
  data.push(req.body);
  res.json(data);
});

app.delete('/todo/:item', function(req, res){
  data = data.filter(todo => {
    return todo.item.replace(/ /g, '-') !== req.params.item;
  });
  res.json(data);
});  


};