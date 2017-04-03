

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

