(function() {

var dash = angular.module("zingTwit", []);

dash.controller('ChartController', function() {
  this.chart = basicChart;

  this.renderChart = function() {
    zingchart.render({
      id:'myChartDiv',
      data: basicChart,
      height: 400,
      width: "100%"
    });
  }
});
// need to create an array of chart data points from the twitter data

// should each chart be an instance of a Chart????
    // with attributes like: data = allthestuff like below
      //and rendered?


// should it be an array of graph types and each is displayed with the same data sequentially?
var basicChart = {
  "type":"bar",
  "title": {
    "text":"Hashtag Trends"
  },
  "series": [
    {"values": [6,3,4,5,6,9,14] },
    {"values": [2,3,8,3,5,8,19] },
    {"values": [1,5,2,7,9,11,22] }
  ]
}


// dash.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when("/tags", {
//     controller:'DashController'//,
//     // templateUrl: ''
//   }).otherwise({
//     redirectTo: '/tags'
//   });
// }])

// dash.controller('DashController', ['$scope', '$http', '$routeParams', 'ngDialog',
//  function($scope, $http, $routeParams, ngDialog){

//     $http.get('/tags').success(function(data) {
//       // take hash tags and make call to this route such that it passes in the
//       // queried hashtags and calls Twitter API
//       var basicChart = {
//         "type":"line",
//         "title": {
//           "text":"Hashtag Trends"
//         },
//         "series": [
//           {"values": [6,3,4,5,6,9,14] },
//           {"values": [2,3,8,3,5,8,19] },
//           {"values": [1,5,2,7,9,11,22] }
//         ]
//       }
//     });

//     alert("Hello!")
//  }]);

})();