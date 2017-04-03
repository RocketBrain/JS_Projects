



dragonList = [new blueDragon("sharp","vorithian","deadly","spear")];

dragonSoldiers = [new dragonSoldier(20,15)];


function dragonSoldier(strength,intelligence) {
  this.strength = strength;
  this.intelligence = intelligence;
}

function blueDragon (teeth,scales,claws,weakness){

	this.teeth = teeth;
	this.scales = scales;
	this.claws = claws;
	this.weakness = weakness;
}


function assignDragonWeapon(soldiers,weapons){

	x = soldiers.length;
	y = weapons.length;

		//goes through iteration of soldiers.	
		for (var i = 0; i<x; i++) {
			//goes through each object instance of weapons (In this case being dragon objects) ----> from dragons we derive their weapon weakness.
			for (var j = 0; j<y; j++) {
				//if there is an instance of the blueDragon object, then we splice its weapon weakness into the weapon of the soldier that was summoned.
				if ( weapons[j] instanceof blueDragon) {
				  //takes out the weapon weakness inside of the instance of blueDragon
				  soldiers[i].weapon = weapons.splice(j,1)[0].weakness;
				  //decrements iteration
					y--;

					//breaks from nested loop
					break;
				}
			}
		}
}

assignDragonWeapon(dragonSoldiers,dragonList);