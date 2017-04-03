patterns = ["5","10","15",true,false];



function takeInValue (pattern, value){
  
  var count = 0, x = pattern.length;
  
  for(var i = 0; i<x; i++){
      if(pattern[i] === value) {
        count ++;
      }
  }
  
  return count;
}


var numTruths = takeInValue(patterns,true);

numTruths;