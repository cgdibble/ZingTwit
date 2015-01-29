(function() {

  var dash = angular.module("zingTwit", []);

  dash.controller('ChartController', ['$scope', '$http', function($scope, $http) {
    this.panel = 0;


    this.barChart = barChart;
    this.pieChart = pieChart;
    this.gaugeChart = gaugeChart;
    this.pianoChart = pianoChart;
    this.pieThreeDChart = pieThreeDChart;

    this.charts = [this.barChart, this.pieChart, this.gaugeChart, this.pianoChart, this.pieThreeDChart];

    this.twitterQueries = [];
    this.userQuery; //each user/search will be assigned to this string, have to break it up

// THINGS TO FIX:::
    // chart Axis labels

    this.assignData = function(userData) {
        this.barChart.data.series.push({
          "text" : "@" + userData.screen_name,
          "values" : [userData.followers_count]
         });   // barChart ====== Followers

        this.pianoChart.data.series.push({
          "text" : "@" + userData.screen_name,
          "values" : [userData.followers_count, userData.friends_count, userData.statuses_count, userData.status_retweets]
        });

        this.pieChart.data.series.push({
          "text" : "@" + userData.screen_name,
          "values" : [userData.friends_count]
        });

        this.gaugeChart.data.series.push({
          "text" : "@" + userData.screen_name,
          "values" : [userData.statuses_count]
        });

        this.pieThreeDChart.data.series.push({
          "text" : "@" + userData.screen_name,
          "values" : [userData.status_retweets]
        });
    }

    this.renderChart = function(chart) {
      zingchart.render({
        id: chart.divId,
        data: chart.data,
        height: 400,
        width: "97%"
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
          dashScope.twitterQueries.push(data)
          dashScope.assignData(data);
          dashScope.panel === 0 ? dashScope.panel = 1 : dashScope.panel;
          console.log("Successful Query::DashController::postDb()");
        })
        .error(function(err) {
          console.log("Request to /search did no work: " + err);
        });
    },

    this.clearData = function() {
      console.log("CLEARING DATA")
      for (var index = 0;index < this.charts.length; index++) {
        this.charts[index].data.series = [];
      }
      this.panel = 0;
    },

    this.selectPanel = function(newPanel) {
      this.panel = newPanel;
    };
    this.isSelected = function(checkPanel) {
      return this.panel === checkPanel;
    }

  }]); // END of Chart Controller

/////////////////////////////////////
///////     Chart Objects     ///////
/////////////////////////////////////

  function Chart(data, divId) {
    this.data = data;
    this.divId = divId;
  }

  var pianoData = {
    "type":"piano",
    "title": {
      "text":"User Data"
    },
    "scale-x" : {
        "values" : ["Followers", "Friends", "Tweets", "Retweets"]
    },
    "legend" : {},
    "chart" : {
      "marginLeft" : "100px"
    },
    "series": []
  }

  var barData = {
    "type":"bar",
    "title": {
      "text":"Number of Followers"
    },
    "chart" : {
      "marginLeft" : "50px"
    },
    "scale-x" : {
      "values" : ["User(s)"]
    },
    "legend" : {},
    "plot": {
        "valueBox": {
            "type": "all",
            "placement": "top"
        }
    },
    "series": []
  }

  var pieData = {
    "type":"pie",
    "title": {
      "text":"Number of Friends"
    },
    "series": []
  }

  var pieThreeD = {
    "type":"pie",
    "title": {
      "text":"Number of Retweets"
    },
    "plot" : {
       "slice" : 45
    },
    "series": []
  }

  var gaugeData = {
    "type":"gauge",
    "title": {
      "text":"Number of Tweets"
    },
    "scale-r" : {
      "aperture" : "225",
      "center" : {
        "size" : "10px",
        "background-color" : "black"
      },
      "ring" : {
        "size" : 15
      }
    },
    "legend" : {},
    "plot": {
        "valueBox": {
            "type": "all",
            "placement": "top"
        }
    },
    "series": []
  }


  var barChart = new Chart(barData, 'barChart');
  var pieChart = new Chart(pieData, 'pieChart');
  var gaugeChart = new Chart(gaugeData, 'gaugeChart');
  var pianoChart = new Chart(pianoData, 'pianoChart');
  var pieThreeDChart = new Chart(pieThreeD, 'pieThreeDChart')
})();