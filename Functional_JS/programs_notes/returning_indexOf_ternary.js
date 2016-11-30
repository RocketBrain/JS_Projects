cars = {
	makes:["Honda","Toyota","BMW"],
}

cars.carMake = function(make){
	return (this.makes.indexOf(make) >= 0) ? this.makes.indexOf(make) : false
}
	
cars.carMake("Toyota")

/*It appears that a condition must be met for the ternary to be returned,
even though I have seen examples of a ternary being returned without any given conditions.
The mystery deepens.
*/
