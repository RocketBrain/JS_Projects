var theCoordinates = {
  x: 0,
  y: 0,
  z: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendCoordinatesTo: function(xyz) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(xyz);
      theCoordinates.postNum = 1;
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(xyz);
      theCoordinates.postNum++;
    }
  }
};

coordinate1 = Object.create(theCoordinates);
coordinate2 = Object.create(theCoordinates);
coordinate3 = Object.create(theCoordinates);
coordinate4 = Object.create(theCoordinates);

coordinate1.x = 3;
coordinate1.y = 4;
coordinate1.z = 7;

coordinate2.x = 8;
coordinate2.y = 9;
coordinate2.z = 3;

coordinate3.x = 10;
coordinate3.y = 8;
coordinate3.z = 4;

coordinate4.x = 12;
coordinate4.y = 7;
coordinate4.z = 2;



coordinate1.sendCoordinatesTo(coordinate2);
coordinate2.sendCoordinatesTo(coordinate1);

coordinatesArray = [coordinate1,coordinate2,coordinate3,coordinate4];

for(i = 0; i<coordinatesArray.length; i ++){
if(coordinatesArray[i].y % 2 === 0 ){

  coordinatesArray[i].randomAssignment = "Duty to be extended, check back here for approximate time.";
  
}


}