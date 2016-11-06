var carMakes = [
  {name: "BMW", color: "black", mileage: 5000},
  {name: "TOYOTA", color: "grey", mileage: 15000},
  {name: "BMW", color: "white", mileage: 50000},

];


//a prototype which counts the make of a particular car
Array.prototype.countMake = function(make){
  var numMake = 0;
  //this refers to object that is calling function
  for(var i = 0; i<this.length; i++){
    // i goes through entire list of objects inside of array
    //Once it finds the name property, it then increments the numMake variable.
    if(  make == this[i].name) {
      
      numMake++;
    }
  }
 
  return numMake;
  
};

carMakes.countMake("BMW")

//this always refers to the "owner" object that calls the function