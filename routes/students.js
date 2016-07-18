var router = require('express').Router();

var studentArray =[
{ name: "Andrew Kolander"},
{ Name: "Anthony Maki"},
{ Name: "Brian Anderson"},
{ Name: "Brian Verduzco"},
{ Name: "Connor O'Gara"},
{ Name: "Cormac Strahan"},
{ Name: "Donovan Goertzen"},
{ Name: "Hillary Manning"},
{ Name: "Jon Wilson"},
{ Name: "Justin Doty"},
{ Name: "Katie Vogel"},
{ Name: "Kyle Quamme"},
{ Name: "Liz Kerber"},
{ Name: "Megan Martinson"},
{ Name: "Richard Camara"},
{ Name:"Ryan Mattson"},
{ Name: "Sahasha Reese"},
{ Name: "Tracy Vincent"},
{ Name: "Trent Johnson"}
];

router.get('/students', function(request, response){
  var studentArray = Math.floor(Math.random() * badminton.length);
  response.send(badminton[studentArray]);
});

module.exports = router;
