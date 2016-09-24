//Instead of using a map method, we are constructing 2 loops to print out "juice" within the 2d array

fruits = ["kale",["apple","orange","grape"]];

//Sets up linear array for transfer from 2d array
juices = [];

for (var i in fruits){
	 //Checks to see if there is a 2d array
     if(fruits[i].constructor === Array){
     	//Goes through each fruit in 2d array
        for (var x in fruits[i]){
        	  //Pushes "juice" at the end of each fruit in 2d array	
              juices.push(fruits[i][x] + " juice");
        }
     }else{
     	//If a 2d array is not found, then it simply prints whatever is in the index, and attaches "juice" to the end. 
        juices.push(fruits[i] + " juice");
     }
}


alert(juices);