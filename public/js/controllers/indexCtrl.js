var app = angular.module("zingtwit", ["ngRoute", "ngDialog"])
  .controller('DashController', ['$scope', '$http', '$routeParams', 'ngDialog',
   function($scope, $http, $routeParams, ngDialog){
      $http.get('/tags').success(function(data) {
        // take hash tags and make call to this route such that it passes in the
        // queried hashtags and calls Twitter API
      })
   }]);