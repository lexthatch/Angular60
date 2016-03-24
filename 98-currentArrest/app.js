/*global angular */
var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "ArrestController",
      templateUrl: "views/main.tpl.html"
    })
    .when("/detail/:index", {
      controller: "ArrestController",
      templateUrl: "views/detail.tpl.html"
    })
    .otherwise({ redirectTo: "/" });
});

app.controller("ArrestController", function ($scope, $http, $routeParams) {
  $scope.inmates = [];
  $scope.$routeParams = $routeParams;

  var fetch = true;
  var data = window.localStorage.getItem("inmates");
  if (data) {
    $scope.inmates = JSON.parse(data);
    var lastFetchDate = window.localStorage.getItem("lastFetchDate");
    if (lastFetchDate) {
      var oldDate = new Date(parseInt(lastFetchDate, 10));
      var diff = Math.abs(new Date(Date.now()) - oldDate);
      var minutes = Math.floor((diff / 1000) / 60);
      if (minutes < 20) {
        fetch = false;
      }
    }
  }

  if (fetch) {
    $http.get("http://api.canyonco.org/Sheriff/CurrentArrest").then(function (response) {
      $scope.inmates = response.data;
      window.localStorage.setItem("inmates", JSON.stringify($scope.inmates));
      window.localStorage.setItem("lastFetchDate", Date.now().toString());
    });

  }

  $scope.clearSearch = function () {
    $scope.search = "";
  }
});
