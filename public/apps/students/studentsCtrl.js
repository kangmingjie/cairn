angular.module('cairn').controller('studentsCtrl', function($scope, studentsService, students) {
	$scope.students = students;
	console.log(students);
});