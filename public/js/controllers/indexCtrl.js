var dash = angular.module("zingTwit", []);

// dash.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when("/tags", {
//     controller:'DashController'//,
//     // templateUrl: ''
//   }).otherwise({
//     redirectTo: '/tags'
//   });
// }])

dash.controller('DashController', ['$scope', '$http', '$routeParams', 'ngDialog',
 function($scope, $http, $routeParams, ngDialog){

    $http.get('/tags').success(function(data) {
      // take hash tags and make call to this route such that it passes in the
      // queried hashtags and calls Twitter API
      var basicChart = {
        "type":"line",
        "title": {
          "text":"Hashtag Trends"
        },
        "series": [
          {"values": [6,3,4,5,6,9,14] },
          {"values": [2,3,8,3,5,8,19] },
          {"values": [1,5,2,7,9,11,22] }
        ]
      }
    });

 }]);