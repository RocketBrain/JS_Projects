
//Find the sum of all the multiples of 3 or 5 below 2000.

sum = 0;
multiples = [];

for ( i = 0; i < 2000; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
      multiples.push(i);
    }
  
}
console.log(sum);
console.log(multiples);