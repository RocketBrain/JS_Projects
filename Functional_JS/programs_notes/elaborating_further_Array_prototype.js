
var carMakes = [
  {name: "BMW", color: "black", mileage: 5000},
  {name: "TOYOTA", color: "grey", mileage: 15000},
  {name: "BMW", color: "white", mileage: 50000},

];



Array.prototype.countMake = function(make){
  var numMake = 0;
  
  for(var i = 0; i<this.length; i++){

    if(  make == this[i].name) {
      
      numMake++;
   }
    
    else if( this[i].name != make ){
        //console.log("We do not have any " + ... + "'s in stock.")
        
        nonSearch = [];
        nonSearch.push(this[i].name)
      }
    
  }
  
   
 
  return numMake;
  
};

carMakes.countMake("BM")

//log error to user