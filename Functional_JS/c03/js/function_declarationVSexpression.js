// When a function is declared, the interpreter will always give priority first to a function declaration, such as this:

function area (width, height) {
return width*height;
}

var size = area(3,4);

// Now if you instead make a function expression, the interpreter will not find the function first as is the case with declaration.

var area = function (width,height) {
return width*height;
};

var size = area(3,4);

//The interpreter will insead  follow a lineal order, calling the function depedning on where it is located in the code.




