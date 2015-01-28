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



    this.assignData = function(data) {
        this.barChart.data.series.push(
          {"text" : data.screen_name,
         "values" : [data.followers_count]
         });   // barChart ====== Followers

        this.pianoChart.data.series.push(
          {"values" : [data.followers_count, data.friends_count, data.statuses_count, data.status_retweets]});

        console.log(this.pianoChart.data.series)

        // pianoChart ====== UserData

        // pieChart ====== Friends
        // gaugeChart ====== Tweets
        // *Chart ====== ReTweets....DONT HAVE A CHART TYPE YET

    }

    this.renderChart = function(chart) {
      zingchart.render({
        id: chart.divId,
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
          dashScope.twitterQueries.push(data)
          dashScope.assignData(data);

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
    }

  }]); // END of Chart Controller

  dash.controller('TabController', function(){
    this.panel = 1;

    this.selectPanel = function(newPanel) {
      this.panel = newPanel;
    };
    this.isSelected = function(checkPanel) {
      return this.panel === checkPanel;
    }
  }); //END of Tab Controller

/////////////////////////////////////
///////     Chart Objects     ///////
/////////////////////////////////////

  function Chart(data, divId) {
    this.data = data;
    this.divId = divId;
  }

  var barData = {
    "type":"bar",
    "title": {
      "text":"Follower Counts"
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
      "text":"Friend Counts"
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

  var gaugeData = {
    "type":"gauge",
    "title": {
      "text":"Status Counts"
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
  var pianoData = {
    "type":"piano",
    "title": {
      "text":"Follower Comparisons"
    },
    "legend" : {},
    "plot": {
        "valueBox": {
            "type": "all",
            "placement": "top"
        }
    },
    "series": [
    ]
  }

  var barChart = new Chart(barData, 'barChart');
  var pieChart = new Chart(pieData, 'pieChart');
  var gaugeChart = new Chart(gaugeData, 'gaugeChart');
  var pianoChart = new Chart(pianoData, 'pianoChart');
})();