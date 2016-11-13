//Overriding prototypal methods.

var Population (city,country){
	this.city = city;
	this.country = country;
}

var cities = [["Santa Barbara", 500000],["Tokyo",40000000]];

var city = new Population(cities,"Japan");

Population.prototype.valueOf = function() {
	var sumOfPopulations = 0;
	for (var i = 0; i < this.city; i++){
		sum += this.city[i][1];
	}
	return sum;
}

