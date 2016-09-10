/* The following function demonstrates a re-usable constructor.

Inn (pun intended) this case we have a re-usable object constructor for several
different types of hotels. Simply by declaring a variable with the 'new' functionality
and referencing the function, you can re-use this Object-Constructor templates
as many times as necessary, all with different key-value pairs.

*/  



function Hotel (name,rooms,booked) {

	this.name = name;
	this.rooms = rooms;
	this.booked = booked; 

	this.checkAvailability = function () {

		return this.rooms = this.booked; 


	}
}
	

	
var exampleHotel = new Hotel ('hotelName', 40, 23);