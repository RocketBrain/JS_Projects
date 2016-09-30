//floor rounds number to nearest integer, random then executes a random # between 1-20.

var randomNum = Math.floor((Math.random() * 20 ) + 1);

//Searches Id of 'info' and stores it in el.
var el = document.getElementById('info');

//el then displays the Id 'info' on the HTML itself.
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';