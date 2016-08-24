var hotel = {
name: 'Quay',
rooms: 40,
booked: 25,
gym: true,
roomTypes: ['twin','double','suite'],
checkAvailability: function() {
return this.rooms - this.booked;
}
};
