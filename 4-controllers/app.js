/*global angular */
var app = angular.module("app", []);

app.controller("SimpleController", function($scope) {
  $scope.customers = [
    { name: "Ken Wilcox", city: "Boise" },
    { name: "Matt Overall", city: "Nampa" },
    { name: "Jake Overall", city: "Nampa" },
  ];  
});
