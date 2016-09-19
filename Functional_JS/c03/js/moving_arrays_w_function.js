//Example of an array that adds things.

function addPassenger (name,list){

	// Checks for person, if 0, adds their name.
	if (list.length==0){

		list.push(name);
	} 
		else 
		{
			// Goes through entire array, and lists it.
			for (var i = 0; i < list.lenth; i++){

				if(list[i] == undefined){
				list[i] = name;
				return list;
				}

					else if (i == list.length - 1){

						list.push(name);
						return list;
					}
			}
		}

}