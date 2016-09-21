var numbers = [12,4,5,4,6,5];

// by using the "map" method, we are able to use a function to alter each individual cell inside of the array. 

var results = numbers.map( function(arrayCell){
	return arrayCell * 2;
}); //must close the "map" method as well as the function itself.

results;