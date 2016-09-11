var width = 600;
var shape = {width:300};


var showWidth = function(){
	document.write(this.width) //the absence of "var" makes this refer to the global variable.
}

showWidth();





function windowSize() {
	
	var width = this.innerWidth;
	var height = this.innerHeight;  //the default object here is the window object.
	return[height,width]; //'this' is being referred to the global function of windowSize().
	
	//the variable width still remains local, however.

}

var shape = {
	
	
	width: 600,
	height: 400,
	getArea: function() {
		return this.width * this.height; // this is the same as referring to shape.width and shape.height
	}
}