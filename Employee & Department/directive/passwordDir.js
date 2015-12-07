/**
* The Directive is Defined for Password Length Validation
* Author : Nitesh Achhra
* Date: 07 Decemeber 2015
*/

app.directive('rpassword', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attributes, control) {
       
        control.$validators.rpassword =
          function(modelValue, viewValue) {
            if(viewValue.length >= 8){
				
				return true;
			}
			else{
				return false;
			}
			
        };
      }
    };
});