cars = {
	makes:["Honda","Toyota","BMW"]
}

cars.carMake = function(make){
	return (this.makes.indexOf(make)>=0) ? //A condition must be met as the ? cannot hold a value as previously thought.
	this.makes.splice(this.makes.indexOf(make))[0] :
	alert("Unfortunately we do not have a " + make + " in stock.");
}

cars.carMake("Mercedes-Benz");
