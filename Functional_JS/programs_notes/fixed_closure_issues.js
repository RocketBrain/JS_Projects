

function ticket( name, passengerArray){
	var ticketAssignment;
	for ( var i = 0; i < passengerArray.length; i++){
		if (passengerArray[i] == name){
			//Now the closure returns the appropriate index, because the return was not outside of the incremental state.
			return ticketAssignment = function() {
				
				alert("Proceed to the nearest isle. " + name + " Your ticket # is: " + (i+1))
			}
		}
	}
	
}

var passengers = ["Gena Mikkel", "Jim Toa"," Alice Wonder"];

giveTicket = ticket("Gena Mikkel", passengers)

//The ticket # is 1 as it should be.
giveTicket();