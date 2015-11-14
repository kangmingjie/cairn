angular.module('cairn').controller('studentViewCtrl', function($scope, student, studentViewService, behaviors, incidents) {
	
	$scope.student = student;
	$scope.behaviors = behaviors;
	$scope.incidents = incidents;
	console.log(behaviors);
	
	$scope.addBehavior = function(newBehavior) {
		studentViewService.addBehavior(newBehavior).then(function(resp) {
			studentViewService.updateStudent($scope.student._id, resp._id);
		});
	}
	$scope.addIncident = function(newIncident) {
		newIncident.student = student._id;
		studentViewService.addIncident(newIncident).then(function(resp){
			console.log(resp);
		});
	}
	$scope.getIncidents = function() {
		studentViewService.getIncidents().then(function(resp){
			console.log(resp);
		})
	};
	$scope.getBehaviors = function() {
		studentViewService.getBehaviors().then(function(resp){
			console.log(resp);
		});
	}
});