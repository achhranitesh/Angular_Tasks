/**
* The Controller is Defined for Login & Redirection
* Author : Nitesh Achhra
* Date: 07 Decemeber 2015
*/

app.controller("loginController", function($scope, $location, $rootScope) {
	$scope.login = function() {
		if($scope.loginForm.$valid){
			$rootScope.loggedInUser = $scope.userName;
			$location.path("/home");
		}
		else{
			$scope.alerts=[];
			$scope.alerts.push({type:'warning',msg: 'Fill All Mandatory Fields'});
		}
	};
});