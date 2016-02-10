/*global angular */
var app = angular.module("app", []);

app.controller("ArrestController", function($scope, $http) {
  $scope.inmates = [];
  
  $http.get("http://api.canyonco.org/Sheriff/CurrentArrest").then(function(response) {
    //debugger;
    $scope.inmates = response.data;
  });
  
  $scope.clearSearch = function() {
    $scope.search = "";
  }
});
