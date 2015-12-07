/**
* Service for getting Employee JSON
* Author : Nitesh Achhra
* Date: 03 Decemeber 2015
*/

app.service('employees', function($http){
        return {
          empList: function(successCb,errorCb){
			  var empList = localStorage["userList"];
			  if (empList) {
			  successCb(JSON.parse(empList));
			  } else {
				  errorCb();
				  localStorage["userList"] = "";
			  }
            /*$http.get('emp.json')
				.success(successCb)
				.error(errorCb);*/
			
			}
		};
});
