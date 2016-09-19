


var numberList = [12,300,7,9,5,3,1];
var evenCount = 0;

// Simple loop which goes through all numbers in each cell.
for (var i = 0; i < numberList.length; i++){
	//Before altering cells, we print out numList in its entirety.
	console.log ("The value in cell " + i + " is " + numberList[i]);
	//Checking numberList for even numbers, if even increase evenCount.
	if(numberList[i] % 2 == 0){
		evenCount++
	// If not even, then pass "undefined" in place of odd number.
	} else {
		numberList[i] = undefined;	
	  }
}

console.log("Even amount: " + evenCount);

console.log(numberList);