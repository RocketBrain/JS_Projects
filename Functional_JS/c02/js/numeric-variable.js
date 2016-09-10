// Create three variables to store the information needed.
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
price = 12;
quantity = 12;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var actual_cost = document.getElementById('cost');
actual_cost.textContent = 'The total cost for your tile is:'+" "+ "$" + total;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/