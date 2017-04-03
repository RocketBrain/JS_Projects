

list = ["Butter", "Squash", "Sasquatch" ];

try {
 //TypeError  list = 32994; 
 //ReferenceError an error where a list wasn't even defined.
  var newList = ["Yeti", "Frost Cake"];
  list.concat(newList);

 
}

catch(error){
	//List not found.
  if (error instanceof ReferenceError) {
    alert(error + "\n" + "the item does not exist as \"list\"! \n" + "Check for relocation in master document.");
  }
  
  // If variable is a float TypeError will usually be given.
  if (error instanceof TypeError){
    alert(error + "\n" + "No concat method found. \n" +"Check for a disastrous overwrite!");
  }
}

