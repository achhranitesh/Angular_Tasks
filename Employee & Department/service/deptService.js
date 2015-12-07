/**
* Service for getting Department JSON
* Author : Nitesh Achhra
* Date: 03 Decemeber 2015
*/
app.service('department', function($http){
        return {
          deptList: function(successCb,errorCb){
			  var deptList = localStorage["deptList"];
			  if (deptList) {
			  successCb(JSON.parse(deptList));
			  } else {
				  errorCb();
				  localStorage["deptList"] = "";
			  }
            /*$http.get('dept.json')
				.success(successCb)
				.error(errorCb);*/
			}
		};
});
