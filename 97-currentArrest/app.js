/*global angular */
var app = angular.module("app", []);

app.controller("ArrestController", function($scope, $http) {
  $scope.inmates = [];
  
  $http.get("http://api.canyonco.org/Sheriff/CurrentArrest").then(function (response) {
    $scope.inmates = response.data;
  });
});
