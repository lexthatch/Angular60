/*global angular */
var app = angular.module("app", []);

app.factory('studentFactory', function() {
  // create the factory object
  var factory = {};
  
  var students = ['Scott', 'Dave', 'Collin', 'Sara', 'Igor', 'Kurt', 'Vina', 'Alex', 'Chris'];
  // add functions to the factory object
  factory.allStudents = function() {
    return students;
  }
  
  factory.getStudents = function(start, end) {
    // make sure what we get is "sane"
    if (start < 0) start === 0;
    if (end > students.length) end === students.length;
    
    // slice will return an array in the range we want
    return students.slice(start, end);
  }
  
  // return the factory object
  return factory
});

app.controller("SimpleController", function($scope, studentFactory) {
  $scope.students = [];
  $scope.start = 0;
  $scope.end = Infinity;
  
  init();
  function init() {
    $scope.students = studentFactory.allStudents();
    // update the values with the correct amounts
    $scope.start = 0;
    $scope.end = $scope.students.length -1;
    // This is used to limit the input box
    $scope.max = $scope.end;
  }
  
  // This allows you to subscribe to change events, this is watching start 
  $scope.$watch("start", function(newValue, oldValue) {
    if (newValue < 0) newValue = 0;
    watching(newValue, oldValue);
  });
  // This allows you to subscribe to change events, this is watching end
  $scope.$watch("end", function(newValue, oldValue) {
    watching(newValue, oldValue);
  });
  
  // Since the code for both is the same, they just call this one method
  function watching(newValue, oldValue) {
    if (newValue !== oldValue) {
      // This just calls a factory method if the values are different
      $scope.students = studentFactory.getStudents($scope.start, $scope.end);
    }    
  }    
});
