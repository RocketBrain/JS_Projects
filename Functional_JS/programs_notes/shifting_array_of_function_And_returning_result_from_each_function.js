var arrayOfFunc = [
  function (c) { return 2+c },
  function (c) { return (c-3) * (c-3) * (c-3); },
  function (c) { return c * c + 4; },
  function (c) { return c % 5; }
];
var input = 2;

//The following function takes each function from inside of arrayOfFunc.
var inputShiftEmpty = function (input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
  	//The loop goes through each function, and shifts over the contents into 'input'
    input = queue.shift()(input);
    /*The function inside of arrayOfFunc is immediately called using (input) where results from the previous function are applied as input after the first
    function is invoked using the starting input of 2.
    
    queue.shift()(input) not only shifts the results of the function, but it also takes the variable "c" in arrayOfFunc on to
    the next function.*/
  
    console.log(input);
  }
  return input; //We return the last result of the function, after each one was shifted and emptied.
};

alert(inputShiftEmpty(input, arrayOfFunc));