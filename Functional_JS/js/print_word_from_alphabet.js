//print out "pro coder" from the alphabet array. Push to only one array and put each letter in its proper sequential order.

alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];

targetWord =[];


// this program gave me a few issues. First; the realization that else-if does NOT re-iterate through code once it passes through loop.
//the standard if does reiterate as many times as possible in search of your input.
//The use of splice,push,pop,shift,and unshift are limited when moving around elements inside of arrays.
//Sometimes a solution may be more simple than one previously thought; even if at the expense of elegance.

for( i = 0; i<alphabet.length; i++){

  if( alphabet[i] == "p"){

    targetWord[0] = 'p';
  }

   if (alphabet[i] == "r") {

     targetWord[1] = "r";
  }

    if (alphabet[i] == "o") {

    targetWord[2] = "o";
   }

    if (alphabet[i] == "c") {

    targetWord[3] = "c";
   }

    if (alphabet[i] == "o") {

    targetWord[4] = "o";
   }

      if (alphabet[i] == "d") {

    targetWord[5] = "d";
   }

     if (alphabet[i] == "e") {

    targetWord[6] = "e";
   }

     if (alphabet[i] == "r") {

    targetWord[7] = "r";
   }



}
//eliminating commas, making two separate words print on same line.

console.log(targetWord.splice(0,3).join("") +" " + targetWord.join(""));
