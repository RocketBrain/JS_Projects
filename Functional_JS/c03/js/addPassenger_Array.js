var listNames = ["Jen","Joe", "Natasha"];

// Function adds a name, and checks the list of names to see if any have been deleted.
function addPassenger (name,list){

	// If the list is empty, then add a name.
	if (list.length==0){

		list.push(name);
	} 
		else 
		{
			//If the list is not empty, now we check the entire contents with this loop.
			for (var i = 0; i < list.length; i++){
			
				//If a name has been deleted, place new name in its spot.
				if(list[i] == undefined){
				list[i] = name;
				return list;
				}
					// If reaching end of loop and no deletions or empty spots, add name to the end of list.
					else if (i == list.length - 1){

						list.push(name);
						return list;
					}
			}
		}

}
addPassenger("Christine",listNames);