colorsNeeded = [
  
  {color: "blue"},
  {background: "black"}
  ]
  
  function colorAssignment(number,color){
    eval("colorNeeded[" + number + "].color ='" + color + "'"); }

    //refactoring same code into an array
    
   function colorsAssignment2(number,color) {
     colorsNeeded[number].color = color;
   } 
   
