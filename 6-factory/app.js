/*global angular */
var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    controller: "SimpleController",
    templateUrl: "View1.html"
  })
  .when("/view2", {
    controller: "SimpleController",
    templateUrl: "View2.html"
  })
  .otherwise({redirectTo: "/"});
});

app.factory('simpleFactory', function() {
  var factory = {};
  var customers = [
    { name: "Ken Wilcox", city: "Boise" },
    { name: "Matt Overall", city: "Nampa" },
    { name: "Jake Overall", city: "Nampa" },
  ];
  
  factory.getCustomers = function() {
    return customers;
  };
  
  return factory;
});

app.controller("SimpleController", function($scope, simpleFactory) {
  $scope.customers = simpleFactory.getCustomers();
  
  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.newCustomer.name,
      city: $scope.newCustomer.city
    });
  }  
});
