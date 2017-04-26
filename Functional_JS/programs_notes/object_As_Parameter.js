myArray = [];


var anObject = {};
myArray.push({});
anObject.data = {};


function addText(anObject){
anObject.textOutput = "You are invoking me via a function.";
}

addText(anObject);

anObject.textOutput;
