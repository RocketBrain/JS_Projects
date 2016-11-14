
//Overriding prototypal methods.

var Population = function (city,country){
	//We built this city on rock and roll.
	this.city = city;
	//These colours don't run 
	this.country = country;
}

var cities = [["Santa Barbara", 500000],["Tokyo",40000000]];

var city = new Population(cities,"Japan");

Population.prototype.valueOf = function() {
	var sumOfPopulations = 0;
	for (var i = 0; i < this.city.length; i++){
	
		sumOfPopulations += this.city[i][1];
	}
	return sumOfPopulations;
}

Population.prototype.toString = function() {

	var list = "";

	for (var i = 0; i < this.city.length; i ++){

		if(i<this.city.length -1){
			list = list + this.city[i][0] + ",";
		}
		else{
			list = list + " and " + this.city[i][0] + " have a combined population of " + this.valueOf()}
		}
		return list;
	}

city.toString()
