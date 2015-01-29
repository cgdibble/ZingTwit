// this is where you use $http and $resource to do API calls to the NODE backend from angular front end

angular.module('TagService', [])
  .factory('Tag', ['$http', function($http) {
    return {
      // call that retrieves all users
      get : function() {
        return $http.get('/tags');
      },
      // these routes don't exist yet
      create: function(tagData) {
        return $http.post('/tags', tagData);
      },
      delete: function(tagId) {
        return $http.delete('/tags' + tagId)
      }
    }

  }]);