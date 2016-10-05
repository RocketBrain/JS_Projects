function closureFunc() {
  var randomNum = 6;
  function closureFunc2(subtract) {
    subtract -= 3;
    return randomNum - subtract;
    function closureFunc3(multiply){
    	
    	multiply *= 4;
    	return closureFunc3;
    }
  }
  return closureFunc2;

}

var hidden = closureFunc();
var result = hidden(10);

result;