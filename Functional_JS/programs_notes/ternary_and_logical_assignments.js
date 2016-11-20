var cars = {addCar: function(car) {
            //ternary conditional checks the calling object, if true leaves it alone, if false then it assigns an empty array.
            this.cars = this.cars ? this.cars : [];
            //we now push our function parameter into the newly definded empty array named "cars."
            this.cars.push(car);
            } 
          };

var cars = {addCar: function(car) {
            //When used in assignment, the or operator checks for the truthy of the first comparison, if false it assigns the second value.
            this.cars = this.cars || [];
            this.cars.push(car);
            } 
          };


//Object structures such as arrays are not true or false, they are simply data structures.

cars.addCar("Honda")

//cars builds an empty array, and "Honda" is pushed as the value of that property.