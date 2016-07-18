angular.module('studentArray').config(function($routeProvider, $locationProvider){

$routeProvider
  .when('/students', {
    templateUrl: 'views/index.html',
    controller: 'StudentController'
  });

  $locationProvider.html5Mode(true);
});
