/**
* The Directive is Defined for Password Length Validation
* Author : Nitesh Achhra
* Date: 07 Decemeber 2015
*/

app.directive('emailv', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attributes, control) {
       
		var MY_EMAIL_REGEX=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]/;
        control.$validators.emailv =
          function(modelValue, viewValue) {
            if(!(angular.isUndefined(viewValue)) && MY_EMAIL_REGEX.test(viewValue)){
				return true;
			}
			else{
				return false;
			}
			
        };
      }
    };
});