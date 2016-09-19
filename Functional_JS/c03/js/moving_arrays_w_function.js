//Example of an array that adds things.

function addPassenger (name,list){


	if (list.length==0){

		list.push(name);
	} 
		else 
		{

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