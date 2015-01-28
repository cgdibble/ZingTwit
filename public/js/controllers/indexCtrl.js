(function() {

  var dash = angular.module("zingTwit", []);

  dash.controller('ChartController', ['$scope', '$http', function($scope, $http) {
    this.barChart = barChart;
    this.pieChart = pieChart;
    this.gaugeChart = gaugeChart;
    this.pianoChart = pianoChart;

    this.charts = [this.barChart, this.pieChart, this.gaugeChart, this.pianoChart];

    this.twitterQueries = [];
    this.userQuery; //each user/search will be assigned to this string, have to break it up

    this.renderChart = function(chart) {
      zingchart.render({
        id: 'chartDiv',
        data: chart.data,
        height: 400,
        width: "95%"
      });
    },

    this.queryTwitter = function() {
      this.postDB(this.userQuery);
      this.userQuery = ""; //reset text field.
    },

    this.postDB = function(userQuery) {
      var dashScope = this
      $http.put('/search', { query : userQuery })
        .success(function(data) {
          console.log("Request to /search worked: " + data.screen_name);
          dashScope.twitterQueries.push(data)
        })
        .error(function(err) {
          console.log("Request to /search did no work: " + err);
        });
    }
        ////////      WHAT IF     :::::::::::

              // ng-repeat went through each query in the twitterQueries array(((this happens for each submission of the form)))
                // for every query, it hit Node, got the twitter data and graphed it.
                    //then the data does not need to be saved???

  }]);

/////////////////////////////////////
///////     Chart Objects     ///////

  function Chart(data, divId) {
    this.data = data;
    this.divId = divId;
  }

  var barData = {
    "type":"bar",
    "title": {
      "text":"Follower Counts"
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
      "text":"Friend Counts"
    },
    "series": [
      {"values": [2700] },
      {"values": [470] },
      {"values": [12322] }
    ]
  }

  var gaugeData = {
    "type":"gauge",
    "title": {
      "text":"Status Counts"
    },
    "series": [
      {"values": [2700] },
      {"values": [470] },
      {"values": [12322] }
    ]
  }
  var pianoData = {
    "type":"piano",
    "title": {
      "text":"Follower Comparisons"
    },
    "series": [
      {"values": [2700] },
      {"values": [470] },
      {"values": [12322] }
    ]
  }

  var barChart = new Chart(barData, 'barChart');
  var pieChart = new Chart(pieData, 'pieChart');
  var gaugeChart = new Chart(gaugeData, 'gaugeChart');
  var pianoChart = new Chart(pianoData, 'pianoChart');
})();