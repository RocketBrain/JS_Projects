var num = 0.1 + 0.2;

console.log(num.toFixed(20))

//starts to break down around the 16th decimalvar num = 0.1 + 0.2;

console.log(num.toFixed(20))

//starts to break down around the 16th decimal

//a further drawback of toFixed is that it returns a string.

// check out this example:

var num2 = 0.5 + 0.70;

console.log(num.toFixed(4) + num2.toFixed(4));

//Both num and num2 are concatenating strings. Uuuuuuuuuugh.

//A way to fix this is with parseFloat which converts strings into numbers.

console.log(parseFloat(num.toFixed(4) + num2.toFixed(4)) + " " + "Yes, very tedious... I know.");