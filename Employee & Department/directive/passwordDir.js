/**
* The Directive is Defined for Password Length Validation
* Author : Nitesh Achhra
* Date: 07 Decemeber 2015
*/

app.directive('rpassword', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attributes, control) {
       
		var MY_PASSWORD_REGEX=/^(?=.*[0-9])(?=.*[_@#])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9_@#]{5,13}$/;
        control.$validators.rpassword =
          function(modelValue, viewValue) {
            if(!(angular.isUndefined(viewValue)) && MY_PASSWORD_REGEX.test(viewValue)){
				
				return true;
			}
			else if(angular.isUndefined(viewValue)){
				return false;
			}
			else{
				return false;
			}
			
        };
      }
    };
});