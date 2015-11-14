var app = angular.module('cairn');

app.controller('loginCtrl', function($scope, loginService, $location) {
	$scope.login = function(user) {
		loginService.login(user).then(function(response){
			console.log(response);
			$location.path('/students');
		});
	};
});