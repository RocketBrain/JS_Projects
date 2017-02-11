function taxPercentage(price,percent){
		//checks for floating point number.
	return parseFloat((price*percent/100).toFixed(2));
	//fixes number so that we don't get strange valuations further down the decimal line.
}