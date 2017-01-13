var cars = ["Toyota", "BMW", "Honda"];

var carLot = [];

var listsForTests = [cars,carLot];

function Car (name,color){
  this.name = name;
  this.color = color;

  switch (color) {

    case 1:
    this.color = "Black";
    break;

    case 2:
    this.color = "Red";
    break;

    case 3:
    this.color = "Yellow";
    break;

    default:
    alert("Choose 1 for Black, 2 for Red, and 3 for Yellow");
  }
}




function SpeedTest (testImplement, testParams, repetitions){
  
 this.testImplement = testImplement;
 this.testParams = testParams;
 this.repetitions = repetitions || 10000;
 this.average = 0;
 
  }
  
  //Using prototype for most common features
  SpeedTest.prototype = {
    startTest: function() {
      var beginTime, endTime, sumTimes = 0;
      
      for( var i = 0, x = this.repetitions; i < x; i++){
        
        // gets the numerical version of Date time
        beginTime = +new Date();
        
        this.testImplement( this.testParams);
        
        endTime = +new Date();
        sumTimes+= endTime - beginTime;
      }
      
      this.average = sumTimes / this.repetitions;
      return console.log("Average execution across " + this.repetitions + ": " + this.average);
    }
  }
  
  
  var testCarsLists = function (listOfParams){
  for ( var i = 0, x =  listOfParams[0].length; i<x; i++){

    listOfParams[1].push(new Car(listOfParams[0][i],1));
    
    }
  }
  
  testCars = new SpeedTest(testCarsLists,listsForTests,50000);
  testCars.startTest();