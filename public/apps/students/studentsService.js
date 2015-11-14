var app = angular.module('cairn');
app.service('studentsService', function($http) {

this.addStudent = function(newStudent) {
	return $http({
		method: 'POST', 
		url: '/student',
		data: newStudent 
	}).then(function(response) {
		return response.data;
	});
};

this.getStudents = function() {
	return $http({
		method: 'GET', 
		url: '/student'		 
	}).then(function(response) {
		return response.data;
	});
};

this.getStudent = function(id) {
	return $http({
		method: 'GET', 
		url: '/student/'+id		 
	}).then(function(response) {
		return response.data;
	});
};

});
