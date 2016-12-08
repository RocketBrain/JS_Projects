cars = {makes:['Honda', 'BMW' , 'Toyota']};

cars.spliceCar = function (make) {
                                                                              //takes out one item
  return (this.makes.indexOf(make)>=0) ? this.makes.splice(this.makes.indexOf(make),1)[0] : false //since item is in an array, an array is taken out
  																					//to get item out of array we use [0] of that index, the sole item.

cars.spliceCar("BMW")