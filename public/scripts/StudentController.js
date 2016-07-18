angular.module('studentArray').controller('StudentController', function($scope, DataService){
  console.log('StudentController On');
  $scope.data = DataService.data;
});
