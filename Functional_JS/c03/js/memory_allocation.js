//Memory Allocation

/* Memory allocation in JavaScript is in the order of magnitude of about 
18 quintillion numbers for every 64 bytes. Of course, this number goes drastically
down for floating point integers, as memory has to be allocated to the period
in a decimal, as well as each additional number.*/

bigNumber =  5.8978e9; //Order of magnitude of 9 0's followed by the 'e' for exponent.

/* Fractions may lose some precison with only having 64 bits allocated to them,
but they are precise enough to where most people do not have to worry about it...
unless you are reaching for astronomical numbers and need the utmost of precision.*/

// There are two values in JvaScript used to denote the infinite nature of numbers.

Infinity;

//and

-Infinity;

/*If you divide Infinity by -Infinity you get: NaN which is not a number.
NaN results from any type of number which does not have a meaninful  or logical result.
*/


//Strings

/* There will be times when you want a new line inside of a string. In this case
all you have to do is use \n. If you want to acually include a black slash,
then you have to add double back slash lines which will escape the new line or tab.*/


//Unary Operators

/* Unary Operators produce a string naming the type of value.*/

console.log(typeof "x");
console.log(typeof 7);
console.log(typeof true);



