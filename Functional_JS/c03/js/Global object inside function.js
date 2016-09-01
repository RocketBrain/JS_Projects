// When you create a function at the top level of a script it is considered global

// The default object in this context is the window object

function windowSize() {

var width = this.innerWidth;
var height = this.innerHeight;
return [height,width];

}