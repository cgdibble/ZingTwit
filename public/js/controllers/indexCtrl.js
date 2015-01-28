(function() {

  var dash = angular.module("zingTwit", []);

  dash.controller('ChartController', ['$scope', '$http', function($scope, $http) {
    this.barChart = barChart;
    this.pieChart = pieChart;
    this.twitterQueries = []; // have n array of data and add it to the chart as necessary
    //on submission of form, push new chartData to this array
    this.userQuery; //each user/search will be assigned to this string, have to break it up
    // console.log(this.userQuery);

    this.renderChart = function(chart) {
      zingchart.render({
        id: chart.divId,
        data: chart.data,
        height: 400,
        width: "95%"
      });
    },

    this.queryTwitter = function() {
      this.twitterQueries.push(this.userQuery)
      this.postDB(this.userQuery);
      this.userQuery = ""; //reset text field.
    },

    this.postDB = function(userQuery) {
      console.log(this.twitterQueries);
      $http.put('/search', { query : userQuery })
        .success(function(data) {
          console.log("Request to /search worked: " + data.screen_name);
          // this.parseData(data);
        })
        .error(function(err) {
          console.log("Request to /search did no work: " + err);
        });
    },

    this.parseData = function(userData) {
        ////////      WHAT IF::::

              // ng-repeat went through each query in the twitterQueries array(((this happens for each submission of the form)))
                // for every query, it hit Node, got the twitter data and graphed it.
                    //then the data does not need to be saved???
    }
  }]);

/////////////////////////////////////
///////     Chart Objects     ///////

  function Chart(divId, data) {
    this.divId = divId;
    this.data = data;
  }
  var barData = {
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

  var pieData = {
    "type":"pie",
    "title": {
      "text":"Follower Comparisons"
    },
    "series": [
      {"values": [2700] },
      {"values": [470] },
      {"values": [12322] }
    ]
  }

  var barChart = new Chart('barChartDiv', barData);
  var pieChart = new Chart('pieChartDiv', pieData);


//////////////////////////////////////////////

//    Since twitter doesn't really offer the trending data (have to pay for it)::::
//        search a hash tag and chart some other piece of data??
//

  // Search a Twitter User:::
    // Have options to view each with different graphs
    /////  For each possible user returned:
              // chart the amount of followers each has

              // chart the amount of tweets each has done (statuses)

              // chart the number of re-tweets each has

//////////     Now, should this do this for the 1st result, and then have a user search for multiple Users on Twitter?

})();