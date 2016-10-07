function Ace(){
	var closure1 = 6;
	function King(input){
	return	input *=  closure1;
	}
	//Ace returns King
	return King;
}

function Queen(input2){
	function Jack(input3){
		return input2(5) * input3;
		
	}
	return Jack;
	
}

//kingsHenchmen flash freezes Ace's state, and now becomes the King's function, because Ace returned the King.
kingsHenchmen = Ace();
//queensBidding becomes the Jack function. The argument the queen takes is also a function which can be used inside of the Jack function.
queensBidding = Queen(kingsHenchmen);

//queensbidding is the Jack function which was returned from the Queen. It takes an argument, which then multiplies kingsHenchmen times itself.
queensBidding(10);



 



