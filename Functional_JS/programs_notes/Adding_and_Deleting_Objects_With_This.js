//using methods inside of objects

anObject = {
	
	
	addAnimal: function (name,color,species){
		//this in this instance refers to the function addAnimal itself.
		this[name] = {color:color,species:species}
	}
}



anObject.takeOut = function(name){
	//this keeps the name of the object intact
	this[name].name = name;
	var temp = this[name];
	delete this[name];
	return temp;
}

anObject.addAnimal("George","Brown-Black-Tan","Monkey");

tempObject =  anObject.takeOut("George");








