function locationPost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

locationPost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

// override the toString method
locationPost.prototype.toString = function () {
var list = "";
  for( var i = 0; i < this.connectionsTo.length; i++){
    
    list = list + this.connectionsTo[i].postNum;
  }
  return "Location post #" + this.postNum + ":\n" +
         "Connected to posts:\n" + list +
         "Distance from ranch: " + this.valueOf() + " yards";
};




