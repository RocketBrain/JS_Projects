//Using multiple objects with the same function

function Hotel (name, rooms, booked) {

this.name = name;
this.rooms = rooms;
this.booked = booked;

this.checkAvailability =function () {
	return this.rooms - this.booked;
  };

}


//Assigning a new variable for each "Hotel" object.
var quayHotel = new Hotel ('Quay', 55, 44);
var parkHotel = new Hotel ('Park', 120, 77);


// Gathering the divs from the HTML, and assigning them new properties.

var details1 = quayHotel.name + " rooms: ";
	details1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');	
	elHotel1.textContent = details1;

var details2 = parkHotel.name + " rooms: ";
	details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById( 'hotel2' );
	elHotel2.textContent = details2;		