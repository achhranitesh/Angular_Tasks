/**
* The Controller is Defined for Department Related Transactions
* Author : Nitesh Achhra
* Date: 04 Decemeber 2015
*/
app.controller('deptController', function ($rootScope,$scope,department,$uibModal) {
	
	$scope.viewDeptList = function () {
		department.deptList(function(department){
			$rootScope.deptList = department;		
		}, function(error){
				$rootScope.deptList = [];
				$scope.deptMessage="No data available";
		});
	}
	$scope.alerts = []; // For Displaying Alerts
	$scope.dept='';
	
	$scope.sortType     = 'deptID'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchDept   = '';     // set the default search/filter term
	/**
	* Submit Function 
	*/
	$scope.submitDept=function() {
		if($scope.deptForm.$valid) {
			// Push Data Elements in Array
			$scope.deptList.push({
				deptID:$rootScope.did,
				deptName:$scope.dept.deptName,
				location:$scope.dept.deptLoc				
			});
			localStorage.setItem('deptList', JSON.stringify($scope.deptList));
			$rootScope.did=$rootScope.did + 1; // increment Department id
			$scope.dept=''; // Clear the form Contents after submit
			$rootScope.modalInstance.close();
			$scope.viewDeptList();
		} else {
			//alert('Fill all Mandatory Fields');
			$scope.alerts=[];
			$scope.alerts.push({type:'warning',msg: 'Fill All Mandatory Fields'});
			
		}
	};
	
	/** 
	* Reset Function 
	*/
	$scope.reset=function(){
		$scope.dept='';	
	};
	/**
	* For Displaying Modal Popup
	*/
	$scope.showAddDeptModalPopup=function(){
			$rootScope.modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'views/addDepartment.html',
				controller: 'deptController'			 
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
});