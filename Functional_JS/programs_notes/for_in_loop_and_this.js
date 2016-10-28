//Using 'this' in a for loop


//Set the object
carParts = {
	
	car1: {price: 50000,
	transmission: "Manual",
	make: "BMW"},
	car2: {price:20000,transmission:"automatic",make:"Toyota"}
}


//key looks at each property inside of carParts. It then console logs the make.
for (key in carParts) {
	console.log(carParts[key].make)
}



//function uses 'this' to refer to 'carParts' and then console logs the price using the key variable inside of the for loop.
carParts.findPrice = function () {
	for( key in this) {
		console.log(this[key].price)
	}
}

carParts.findPrice();

	
	