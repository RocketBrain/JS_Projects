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

coordinate1.x = 3;
coordinate1.y = 4;
coordinate1.z = 7;

coordinate2.x = 8;
coordinate2.y = 9;
coordinate2.z = 3;



coordinate1.sendCoordinatesTo(coordinate2);
coordinate2.sendCoordinatesTo(coordinate1);


