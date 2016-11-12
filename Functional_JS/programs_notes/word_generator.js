var wordScramble = {
  x: "",
  y: "",
  z: "",
wordsConnected: undefined,
  sendWordsTo: function(xyz) {
    if (this.wordsConnected == undefined) {
      var wordArray = [];
      wordArray.push(xyz);
      this.wordsConnected = wordArray;
    } else {
      this.wordsConnected.push(xyz);
    }
  }
};
 
