/*global angular */
var app = angular.module("app", []);

app.controller("StarController", function($scope, $http) {
  $scope.stars = [];
  
  $http.get("/starsData.csv").then(function (response) {
    // response.data is the csv file
    var data = response.data;
    // call the parse method
    parseTheStars(data);
  });
  
  function parseTheStars(data) {
    // split each line by \n (new line)
    var lines = data.split("\n");
    for (var index = 0; index < lines.length; index++) {
      // for each line - parse out the bits
      var line = lines[index];
      var bits = line.split(",");
      // I don't know what the field names are, so I'm using a lame name here
      // -1.46,α CMa,45:53.1,-16:44:20.7
      var star = {
        brightness: bits[0],
        name: bits[1],
        timeA: bits[2],
        timeB: bits[3]
      }
      $scope.stars.push(star);
    }
  }
});
