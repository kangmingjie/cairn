var app = angular.module('cairn');

app.service('signUpService', function($http) {
	this.register = function(user) {
    return $http({
      method: 'POST',
      url:'/user',
      data: user
    }).then(function(response) {
      return response.data;
    });
  };
});