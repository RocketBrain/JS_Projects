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


var width = 600;
var shape = {width:300};


// Because the showWidth function is defined in global scope, 'this' will have global scope.
// this can also have local scope if you place it within the 'shape' object.  


var showWidth = function() {
	document.write(this.width,); // If you call the function now, it will be global "showWidth();"
	
}


shape.getWidth = showWidth; // now 'this' is referring to 'width' inside of shape object.

shape.getWidth(); //calling function now shows us "300" from the width of the shape object.
