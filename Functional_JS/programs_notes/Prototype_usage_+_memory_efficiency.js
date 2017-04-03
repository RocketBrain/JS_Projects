//Building constructor for all further makes
function carMake (make,mileage){
  this.make = make;
  this.mileage = mileage;
}

//making a prototype for all further shared object properties so that the carMake constructor does not undergo memory overload.
carMake.prototype = {
  color: function addColor(color){
    this.color = color; //'this' inside of a prototype, actually calls back the original function and constructor 'carMake'
  }
}
  
  car1 = new carMake("BMW", 15000);
  car1.color("blue");