var app = angular.module('studentArray', []);

app.controller('StudentController', function($scope, $http) {

  $scope.test = "Display List of Students.";

  $scope.students = '';


  $scope.displayStudentList = function() {
    $http.get('/students/index')
    .then(function(response){
    $scope.students = response.data.FirstName + ' from ' + response.data.LastName;
    });

  };

});
