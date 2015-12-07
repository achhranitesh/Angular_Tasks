/**
* This File Defines the RootScope and Route used in the application 
* Author : Nitesh Achhra
* Date: 03 Decemeber 2015
*/

var app = angular.module('empApp', ['ngRoute','ui.bootstrap']);

app.run(function($rootScope) {
    $rootScope.eid = 1;
	$rootScope.did = 1;
	$rootScope.userList=[];
	$rootScope.deptList=[];
	$rootScope.loggedInUser='';
})

/**
* Function for Configuring Module
*/
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
		   templateUrl: 'views/login.html',
		   controller:'loginController'
		}).
		when('/home', {
		   templateUrl: 'views/menu.html'
		}).
		when('/viewDept', {
		   templateUrl: 'views/viewDepartment.html',
		   controller:'deptController'
		}).
		when('/addDept', {
		   templateUrl: 'views/addDepartment.html',
		   controller:'deptController'
		}).
		when('/addEmp', {
		   templateUrl: 'views/addEmployee.html',
		   controller:'empController'
		}).
		when('/viewEmp', {
		   templateUrl: 'views/viewEmployee.html',
		   controller:'empController'
		});
		
 }]);