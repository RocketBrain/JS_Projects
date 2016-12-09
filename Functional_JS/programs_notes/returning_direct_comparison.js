cars = {
  
  makes: ["Toyota","BMW","Honda"],
}

//no need for a conditional
cars.getCar = function (make){
	return (this.makes.indexOf(make) >= 0)
	// if not -1, returns truthy
}

cars.getCar("Toyota");