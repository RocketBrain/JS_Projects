//Separate array 'superBlinders' that will be integrated inside of lighthouseRock

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];


//lighthouseRock is the 'location' of the dontPanic function
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};


function dontPanic(location) {
     
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // further caching
  for(var i = 1, numRangers = location.numRangers; i <= numRangers; i++){

    locStation = location.weaponBulbs[location["ranger" + i].station-1][0];
    locName = location["ranger" + i].name;
    list+= locName +", man the " + locStation  + "!\n";
  }
    
  alert(list);
}

dontPanic(lighthouseRock);
