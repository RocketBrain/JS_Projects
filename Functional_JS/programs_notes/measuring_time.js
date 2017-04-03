function Car (name,color){
	this.name = name;
	this.color = color;

	switch (color) {

		case 1:
		this.color = "Black";
		break;

		case 2:
		this.color = "Red";
		break;

		case 3:
		this.color = "Yellow";
		break;

		default:
		alert("Choose 1 for Black, 2 for Red, and 3 for Yellow");
	}
}


var cars = ["Toyota","BMW","Honda"];

console.time('Testing performance');

for(var i = 0, x = cars.length; i<x; i++){

	var newCars = new Car (cars[i], 2);
	cars.push(newCars); 


}

console.timeEnd('Testing performance');

