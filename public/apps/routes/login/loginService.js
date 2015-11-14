var app = angular.module('cairn');

app.service('loginService', function($http) {
	this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response) {
      return response.data;
    });
  };
});