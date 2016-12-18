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



//function retrieves object, then code uses the properties of the object itself to carry out its nefarious deeds.
function dontPanic(location) {
  
  numRangers = location.numRangers; //beginning caching process
    
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  for(var i = 1; i <= numRangers; i++){

    /*The second part of this list is interesting. We are accesing the superBlinders array through the location which in this 
    case is 'lighthouseRock.' and inside of lighthouseRock is weaponBulbs which holds superBlinders. We then access the multi-dimensional
    array using bracket notation. [location["ranger" + i] is using the for loop to access either ranger1,ranger2, or ranger3. Keep in mind 
    that this entire time we are using bracket notation INSIDE of another property, namely weaponsBulbs. Once this is accomplished, 
    it then checks the 'station' property of that ranger, and gives the appropriate number into the array.*/
    
    

    list+=location["ranger" + i].name  +", man the " + location.weaponBulbs[location["ranger" + i].station-1][0] + "!\n";

    /*It is fascinating to think that the following line: [location["ranger" + i].station-1] is really only accessing a number; using several layers
    of abstraction to get the final number. The entire bit of code 'location.weaponBulbs[location["ranger" + i].station-1]' is really either a number 
    between 1-3 and goes into the first bracket of the multi-dimensional array.*/
   
  }
    
  

  alert(list);
}

dontPanic(lighthouseRock);
