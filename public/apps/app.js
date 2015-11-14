var app = angular.module('cairn', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'apps/routes/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/login', {
      templateUrl: 'apps/routes/login/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .when('/signUp', {
      templateUrl: 'apps/routes/signUp/signUpTmpl.html',
      controller: 'signUpCtrl'
    })
	.when('/students', {
      templateUrl: 'apps/routes/students/studentsTmpl.html',
      controller: 'studentsCtrl',
      resolve: {
        students: function(studentsService) {
          return studentsService.getStudents();
        }
      }
    })
  .when('/createStudent', {
    templateUrl: 'apps/routes/createStudent/crStTmpl.html',
    controller: 'crStCtrl'
  })
  .when('/studentView/:id', {
    templateUrl: 'apps/routes/studentView/studentViewTmpl.html',
    controller: 'studentViewCtrl',
    resolve: {
      student: function(studentsService, $route) {
        return studentsService.getStudent($route.current.params.id);
      },
         incidents: function(studentViewService, $route) {
        return studentViewService.getIncidents(); 
      },
            behaviors: function(studentViewService, $route) {
        return studentViewService.getBehaviors();
      }
    }
  }) 
 
    .otherwise('/');
});