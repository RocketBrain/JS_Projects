// Store the greeting in a variable
var testing_id = 'Howdy ';

// Store the users name in a variable
var name = 'Molly';

/* Create the welcome message by concatenating the strings in the two variables */
var welcomeMessage = testing_id + name + '!';

// Get the element that has an id of greeting
var el = document.getElementById('testing_id');

// Replace the content of this element with the personal message
el.textContent = welcomeMessage;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
el.innerHTML = welcomeMessage;
*/