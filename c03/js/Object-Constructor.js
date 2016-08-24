/*So in the previous example I used direct object notation.

Here, we are:

1. Creating a blank object by initializing it (new) and then using the Object() constructor function.
2. This in itself is a constructor object, because you are defining an object
that can be used with several other objects, using only one function.

*/ 

var hotel = new Object();

hotel.name = 'Motel 9000';
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability = function() {

	return this.rooms - this.booked;
};
