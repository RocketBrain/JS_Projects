var listNames = ["Jen","Joe", "Natasha"];

// Function deletes name from list.

function deletePassenger (name,list){

	// If the list is empty, then add a name.
	if (list.length==0){

		console.log("list is empty!");
	} 
		else 
		{
			//If the list is not empty, now we check the entire contents with this loop.
			for (var i = 0; i < list.length; i++){
			
				//If name is found, delete.
				if(list[i] == name){
				list[i] = undefined;
				return list;
				}
					// If reaching end of loop and name is not found.
					else if (i == list.length - 1){

						console.log("Name not found!");
						return list;
					}
			}
		}

}
deletePassenger("Jen",listNames);

listNames;