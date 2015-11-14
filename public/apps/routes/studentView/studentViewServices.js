angular.module('cairn').service('studentViewService', function($http){
	
	this.addBehavior = function(newBehavior) {
		return $http({
			method: 'POST', 
			url: '/behavior',
			data: newBehavior
		}).then(function(response) {
			return response.data;
		});
	};
	
	this.addIncident = function(newIncident) {
		return $http({
			method: 'POST',
			url: '/incident',
			data: newIncident
		}).then(function(response) {
			return response.data;
		});
	};
	
		this.getBehaviors = function() {
		return $http({
			method: 'GET', 
			url: '/behavior'
		}).then(function(response) {
			return response.data;
		});
	};
	
	this.getIncidents = function() {
		return $http({
			method: 'GET',
			url: '/incident'
		}).then(function(response) {
			return response.data;
		});
	};
		
	this.updateStudent = function(id, behaviorId) {
		return $http({
			method: 'PUT',
			url: '/student/' + id,
			data: {behaviorId: behaviorId}
		}).then(function(response) {
			console.log(response);
		}, function(err){console.log(err)});
	};	
});