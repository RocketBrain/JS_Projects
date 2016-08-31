//Recap of literal vs constructor notation.

//Literal notation

var hotel = {};

hotel.name = "literal";
hotel.number = 45;
hotel.booked = 40;

hotel.checkAvailabillity = function() {

	return this.rooms - this.booked;
};

//Constructor

var hotel = new Object();
hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailabillity = function () {

	return this.rooms - this.booked;
};