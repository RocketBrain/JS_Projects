


function leatherArmor (body,buckles,spaulders){
  this.body = body;
  this.buckles = buckles;
  this.spaulders = spaulders;
}

function chainMailArmor(metal,hasHood,armorLength){
  this.metal = metal;
  this.hasHood = hasHood;
  this.armorLength = armorLength;
}

function Armor (location){
  this.location = location;
}

Armor.prototype = {
  putOn: function (){
    alert("Your armor is on!");
  }
}

var Babylon = new Armor("somewhere");

//Using object create, Armor becomes prototypal parent of these instances.
leatherArmor.prototype = Object.create(Armor.prototype);
chainMailArmor.prototype = Object.create(Armor.prototype);


var squire = new leatherArmor("Regular",2,"none");

squire.putOn()


// because leather and chainMailArmor become children of the Armor prototype, squire which uses a new instance of leatherArmor is also an instance of Armor.
console.log(squire instanceof Armor)