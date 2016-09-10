// Create variables and assign their values
var inStock;
var shipping;

// The boolean value of true or false can be used in the place of so_true and so_false
// and it will yield the same results.

inStock = "true";
shipping = "false";



// Get the element that has an id of stock
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;

// Get the element that has an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;