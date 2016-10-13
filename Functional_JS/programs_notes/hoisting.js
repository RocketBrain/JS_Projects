//Example of hoisting when running JS in a compiler

function sum (a,b) {


	/* 1. var x is "hoisted" to the top and allocated memory space, 
	but it remains undefined.*/
	var x = add(a*a,b*b);


	return x;
	/* 2. Next, the function add which is inside of sum, is given its own memory allocation
	and awaits the executables.*/

	function add(c,d){
		var a = c + d;
		return a;
	}

	/*3. Finally, what we want the function to execute and return, is finally run.*/
}

sum(1,2)