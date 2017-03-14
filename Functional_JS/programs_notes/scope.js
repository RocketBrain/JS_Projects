//Global scope

var greeting = "Hello";
var name = "Edward";

//Function scope

function hello (name){

  var greeting = "Hello";
  return greeting + " " + name;

}

//Block scope

{
  var scopeVariable = "Outside block";

//Nested block scope
  {
    var nestedScopeVariable = "Nested block";
  }

}


//typically for loops are met in a global scope
for (i = 0; i < greeting.length; i++) {}
console.log(i);


//nice thing about 'let' is that we can now confine the 'scope' locally.
for (let j=0; j<name.length; j++ ){}
console.log(j);// no longer prints to console at the global block.




console.log(scopeVariable);
console.log(nestedScopeVariable);
