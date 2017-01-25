

list = ["Butter", "Squash", "Sasquatch" ];

try {
 //TypeError  list = 32994; 
 //ReferenceError an error where a list wasn't even defined.
  var newList = ["Yeti", "Frost Cake"];
  list.concat(newList);

 
}

catch(error){
  if (error instanceof ReferenceError) {
    alert(error + "\n" + "the item does not exist as \"list\"! \n" + "Check for relocation in master document.");
  }
  
  if (error instanceof TypeError){
    alert(error + "\n" + "Alas, the Hall's list has no concat method. \n" +"Check for a disastrous overwrite!");
  }
}

