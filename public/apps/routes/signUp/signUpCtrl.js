var app = angular.module('cairn');

app.controller('signUpCtrl', function($scope, signUpService, $location){
  $scope.register = function(user, password) {
	if (user.password === password) {
		signUpService.register(user).then(function(response){
			console.log(response);
			$location.path('/login');
		});
	} 
  };
});