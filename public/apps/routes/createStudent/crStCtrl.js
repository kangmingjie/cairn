var app = angular.module('cairn');
app.controller('crStCtrl', function($scope, studentsService, $location) {
	
	$scope.newStudent = {
		name: "",
		age: null,
		gender: ""
	};
	
	$scope.addStudent = function(newStudent) {
		studentsService.addStudent(newStudent);
	}
	
	
});