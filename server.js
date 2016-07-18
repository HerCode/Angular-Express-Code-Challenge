var express = require('express');

var index = require('/routes/index.js');
var students = require('/routes/students.js');
var app = express();

//static files
app.use(express.static('public'));

// Routers
// offloading the routes to our router file
app.use('/', index);
app.use('/students.js', students);

var server = app.listen(process.env.PORT || 3000, function() {
  var port =server.address().port;
console.log('Listening on port', port);
});
