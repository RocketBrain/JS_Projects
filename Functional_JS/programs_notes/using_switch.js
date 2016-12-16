function mileageFinder(name) {

	this.name = name;


switch (name) {

	case "BMW":
	this.mileage = 5000
	
	
	case "Toyota": 
	this.mileage = 20000
	
	  
	case "Honda":
	this.mileage = 50000

	default: console.log("Without a break, fall through occurs.") //default gets printed even though BMW case was selected.

}

  
}


var car1 = new mileageFinder("BMW");

car1;


