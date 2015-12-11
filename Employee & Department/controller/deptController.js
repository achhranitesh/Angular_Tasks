/**
* The Controller is Defined for Department Related Add, Update & Delete Transactions
* Author : Nitesh Achhra
* Date: 04 Decemeber 2015
* Updated : 11 December 2015
*/
app.controller('deptController', function ($rootScope,$scope,department,$uibModal) {
	
	$scope.alerts = []; // For Displaying Alerts
	$scope.dept='';
	$scope.edit=0; // to set the status of Edit Panel 0- Donot Display, 1- Display
	$scope.selected = {}; 
	$scope.sortType     = 'deptID'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchDept   = '';     // set the default search/filter term
	
	
	/**
	* Displaying the List of Department
	*/
	$scope.viewDeptList = function () {
		department.deptList(function(department){
			$rootScope.deptList = department;		
		}, function(error){
				$rootScope.deptList = [];
				$scope.deptMessage="No data available";
		});
	}
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
	* Remove Row Function-- Only Removes from the Table, Values are present in Local Storage
	*/
	$scope.removeRow = function(id){				
		var index = -1;		
		var deptR = eval( $scope.deptList );
		for( var i = 0; i < deptR.length; i++ ) {
			if( deptR[i].deptID === id ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.deptList.splice( index, 1 );		
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
	
	/**
	* Editing the Record
	*/
	$scope.editDept = function (index) {
		$scope.edit=1;
		$scope.index = index;
		$scope.dept = $scope.deptList[index];
    }; 
	/**
	* Updating the Record
	*/
	$scope.updateDept = function () {
		$scope.deptList[$scope.index]=$scope.dept;
		localStorage.setItem('deptList', JSON.stringify($scope.deptList));
		$scope.edit=0;
    };
	
	/**
	* Cancel Update
	*/
	$scope.cancelUpdate = function () {
		$scope.edit=0;
		$scope.viewDeptList();
    };
});