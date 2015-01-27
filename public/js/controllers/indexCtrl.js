(function() {

  var dash = angular.module("zingTwit", []);

  dash.controller('ChartController', ['$scope', '$http', function($scope, $http) {
    this.chart = basicChart;
    this.twitterQuerry = []; // have n array of data and add it to the chart as necessary
    //on submission of form, push new chartData to this array
    this.userQuery = ""; //each user/search will be assigned to this string, have to break it up
    console.log(this.userQuery);

    this.renderChart = function() {
      zingchart.render({
        id:'myChartDiv',
        data: basicChart,
        height: 400,
        width: "100%"
      });
    },

    this.queryTwitter = function() {
      this.twitterQuerry.push(this.userQuery)
      this.userQuery = ""; //reset text field.

      $http.get('/search')
        .success(function(data) {
          console.log("Request to /tags worked: " + data);
        })
        .error(function(err) {
          console.log("Request to /tags did no work: " + err);
        })
      // call function/route to query twitter and give back parsed response/ data needed to graph
    }

  }]);

  var basicChart = {
    "type":"bar",
    "title": {
      "text":"Follower Comparisons"
    },
    "series": [
      {"values": [2700] },
      {"values": [470] },
      {"values": [12322] }
    ]
  }
///////////////////////
      // Should the graph portion be a directive??
///////////////////////

//    Since twitter doesn't really offer the trending data (have to pay for it)::::
//        search a hash tag and chart some other piece of data??
//

  // Search a Twitter User:::
    // Have options to view each with different graphs
    /////  For each possible user returned:
              // chart the amount of followers each has

              // chart the amount of tweets each has done (statuses)

              // chart the number of re-tweets each has

//////////     Now, should this do this for the 1st result, and then have a user search for multiple Users on Twitter?       //////////

///////////////////////
///////////////////////

// should it be an array of graph types and each is displayed with the same data sequentially?

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