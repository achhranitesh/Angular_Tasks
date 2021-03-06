/**
* The Controller is Defined for Employee Related Transactions
* Author : Nitesh Achhra
* Date: 04 Decemeber 2015
* Updated : 11 December 2015
*/
app.controller('empController', function ($rootScope,$scope,employees,$filter,$uibModal) {
	
	$scope.alerts = ''; // For Displaying Alerts
	$scope.user='';
	$scope.edit=0; 
	$scope.sortType     = 'empID'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchEmp   = '';     // set the default search/filter term
	
	$scope.viewEmpList = function () {
		
		employees.empList(function(employees){
			$rootScope.userList = employees;		
		}, function(error){
				$rootScope.userList = [];
				$scope.empMessage="No data available";
		});
	}
	/**
	* Submit Function 
	*/
	$scope.submitEmp=function() {
		if($scope.userForm.$valid) {
			// Push Data Elements in Array
			$rootScope.userList.push({
				empID:$rootScope.eid,
				firstName:$scope.user.firstName,
				lastName:$scope.user.lastName,
				DOB:$filter('date')(new Date($scope.user.DOB),  'dd MMM yyyy'),
				Email:$scope.user.email
			});
			localStorage.setItem('userList', JSON.stringify($rootScope.userList));
			$rootScope.eid=$rootScope.eid + 1; // increment employee id
			$scope.user=''; // Clear the form Contents after submit
			$rootScope.modalInstance.close();
			$scope.viewEmpList();
		} else {
			$scope.alerts=[];
			$scope.alerts.push({type:'warning',msg: 'Fill All Mandatory Fields'});
		}
		
	};
	
	/** 
	* Reset Function 
	*/
	$scope.reset=function(){
		$scope.user='';	
	};
	
	/**
	*Modal Popup Display of Employee Form
	*/
	$scope.showAddEmpModalPopup=function(){
			$rootScope.modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'views/addEmployee.html',
				controller: 'empController'			 
			})
	};
	/**
	* For Closing Alerts
	*/
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	
	/**
	* For Closing Modal Popup
	*/
	$scope.cancel = function () {
		$rootScope.modalInstance.dismiss('cancel');
	};	
	
	/**
	* Remove Row Function-- Only Removes from the Table, Values are present in Local Storage
	*/
	$scope.removeRow = function(id){				
		var index = -1;		
		var empR = eval( $scope.userList );
		for( var i = 0; i < empR.length; i++ ) {
			if( empR[i].empID === id ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.userList.splice( index, 1 );		
	};
	
	/**
	* Editing the Record
	*/
	$scope.editEmp = function (index) {
		$scope.edit=1;
		$scope.index = index;
		$scope.emp = $scope.userList[index];
    }; 
	/**
	* Updating the Record
	*/
	$scope.updateEmp = function () {
		$scope.userList[$scope.index]=$scope.emp;
		localStorage.setItem('userList', JSON.stringify($scope.userList));
		$scope.edit=0;
    };
	
	/**
	* Cancel Update
	*/
	$scope.cancelUpdate = function () {
		$scope.edit=0;
		$scope.viewEmpList();
    };
	
});