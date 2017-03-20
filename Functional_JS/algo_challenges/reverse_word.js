//Reverse the order of a string without using reverse js method.

emptyString = "";

function reverseString(str){

//decrementation, properly reverses flow of letters
  for( i = str.length; i>=0; i--){

  	//avoid bug  of declaring an empty string inside of the loop scope itself.

    console.log (str.charAt(i));//verify code

    emptyString +=  str.charAt(i);

   }

   return emptyString;
}

reverseString("Hello");
