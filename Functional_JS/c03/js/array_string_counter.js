

//Set the array with  strings
stringNames = ["a","b","c"];

//This will count the amount of strings in any variable with an array.
function numStrings(list) {
  var count = 0;
  for(i = 0; i < list.length; i++) {
		//loops through each string, counting amount.    
    	if( typeof list[i] == "string") {
      	count++;
    	}
   }   
 	
  return count;

}
