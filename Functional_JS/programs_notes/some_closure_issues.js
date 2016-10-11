//This is an example of a closure that does not return the appropriate ticket # because the closure was not returned properly.

function ticket( name, passengerArray){
	var ticketAssignment;
	for ( var i = 0; i < passengerArray.length; i++){
		if (passengerArray[i] == name){
			ticketAssignment = function() {
				//The array is incremented in its entirety because the return of the function only comes after the interation.
				alert("Proceed to the nearest isle. " + name + " Your ticket # is: " + (i+1))
			}
		}
	}
	return ticketAssignment;
}

var passengers = ["Gena Mikkel", "Jim Toa"," Alice Wonder"];

giveTicket = ticket("Gena Mikkel", passengers)

//The ticket # is 4, when it should be 1, as Gena is the first in the index.
giveTicket();