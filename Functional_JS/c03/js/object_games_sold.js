
//Building a re-usable object

function game (name,sold,available){
// 'this' refers to the object itself. The method that follows, can be named anything, as long as it is equal to the agruments inside of the function.

	this.name = name;
	this.sold = sold;
	this.available = available;
	
	this.total = function () {
		
	return this.available - this.sold;
	}
}

// Having built the template successfully, we can now use any 'game' to fill that template.
var Dishonored = new game ("Dishonored",300000,400000);


// The same applies to the constructor object. We can replace the 'game' template with any properties we wish, as long as it follows the format of the template.
var game = new Object();

game.name = "Dishonored";
game.sold = 300000;
game.available = 400000;

game.total = function () {
	
	return game.available - game.sold;
}

