var router = require('express').Router();

var studentArray = [
  "Andrew Kolander",
  "Anthony Maki",
  "Brian Anderson",
  "Brian Verduzco",
  "Connor O'Gara",
  "Cormac Strahan",
  "Donovan Goertzen",
  "Hillary Manning",
  "Jon Wilson",
  "Justin Doty",
  "Katie Vogel",
  "Kyle Quamme",
  "Liz Kerber",
  "Megan Martinson",
  "Richard Camara",
  "Ryan Mattson",
  "Sahasha Reese",
  "Tracy Vincent",
  "Trent Johnson"
];
router.get('/students', function(request, response){
  response.send(students);
});

router.post('/add', function(request, response){
  console.log(request.body);

  var studentArray = request.body;

  if(studentArray.type === 'students'){
    students.push(student.studentArray);
    response.sendStatus(200);
  } else {
    response.sendStatus(500);
  }

});

module.exports = router;
