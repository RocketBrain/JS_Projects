// Creation of object

var hotel = {
name: 'Park',
rooms: 120,
booked: 77,

};


//Assigning booleans to object properties
hotel.gym =  true;
hotel.pool = false;
delete hotel.booked;


//Scouring HTML code for hotelName,Pool,and Gym
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

//Assigning boolean value to css property
var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;

