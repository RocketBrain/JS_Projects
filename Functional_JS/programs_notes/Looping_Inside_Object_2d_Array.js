var lights = [
["yellow", 4000],
["blue", 6000],
["white", 12000]
];

var wattageBulbs = {
gateClosed: true,
bulbs: [200, 500, 750],
capacity: 30,
};

// remove bulbs property from wattageBulbs
delete wattageBulbs.bulbs;

// add lights property to wattageBulbs
wattageBulbs.wattageColors = lights;

var wattage = 0;
var name;



// Using a for loop to find the highest color wattage along with its name.

for(i = 0; i<wattageBulbs.wattageColors.length; i ++){
	
	if(wattageBulbs.wattageColors[i][1] > wattage){
		wattage = wattageBulbs.wattageColors[i][1];
		name = wattageBulbs.wattageColors[i][0];
	}
}

name + " " + wattage;