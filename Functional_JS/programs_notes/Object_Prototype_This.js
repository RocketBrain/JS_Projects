var carMakes = [
  {name: "BMW", mileage: "5000", manual: null},
  {name: "Toyota", mileage: "80000", manual: null},
  {name: "Mercedes", mileage: "9000", manual: null},
  {name: "Honda", mileage: "109000", manual: null},
  {name: "Ferrari", mileage: "0", manual: "Yes"}
];

Object.prototype.manualShift = function () {
  
  for(var i = 0; i<=this.length; i++){
    if(this[i].manual == "Yes" ){
      return true;
    }
  }
}

carMakes.manualShift();
