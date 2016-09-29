var marketItems = [["Soda",5], ["Milk",3],["Booze",40]];

var specials = ["Milk",3];

var wantedItem = "Milk";



var selection = itemSelection(marketItems,specials,wantedItem);


function itemSelection(allItems,special,pick) {
	
	
	
	if(special[0] == pick) {
		
		specialPrice = special[1] - (special[1] * .30)  ;
		
		return function(){alert("Today you get a discount of 30% on your " + special[0] + "." + " Your total comes to: $" + specialPrice )};
	}
	else{
		for( i = 0; i < allItems.length; i++ ){
			if(allItems[i][0] == pick){
				return function () { alert("Your total is $" + allItems[i][1] + ". Thank you, come again!")};
				
		}
	}
}

	
}

selection();