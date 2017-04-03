list = ["Butter", "Squash", "Sasquatch" ];

try {
  list = "32994"; 
 //ReferenceError an error where a list wasn't even defined.
  var newList = ["Yeti", "Frost Cake"];
  
  //Throwing more accurate code for futher debugging accuracy.
  if(list ===undefined){
    throw new ReferenceError();
  }
  
  if((list instanceof Array) === false){
    throw new TypeError();
  }
  list.concat(newList);

 
}

catch(error){
  if (error instanceof ReferenceError) {
   
    
    alert(error + "\n" + "the item does not exist as \"list\"! \n" + "Check for relocation in master document.");
  }
  
  if (error instanceof TypeError){
     //Where as before the code would execute, using throw allows for more precision in the error itself.
    alert(error + "\n" + "List exists, but is no longer an array. \n" +"Check for overwrite.");
  }
}


/*If all else fails (and even if it doesn't!) the code you need for further debugging, will be executed in the "finally" block.
This serves as a good way to log what the actual code may be executing.
With finally, you can still use console.log methods of debugging while using try, catch and throw.*/

finally {console.log(list)};