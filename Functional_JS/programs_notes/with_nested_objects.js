//using with

var Troll = {

	internet: {
	trolls: "many"
    },
	howToAvoid: function() {
		alert("Don't feed!!!!!")
	}
}


//treats everything inside of a 'with' block as local.
with(Troll){
	howToAvoid();
}

//if you try to change objects inside of with, they are treated as global:

with(Troll){
	function howNotToAvoid(){
		alert("FEED!!!!!!!!!!!")
	}
}

//When you make a new property inside of the object using with, it treats it as a global variable.


//You can also use with to access nested objects.

with(Troll.internet){
  if (trolls == "many"){
    alert("Stay far away!!!")
  }
}

//While 'with' seems ideal for nested objects, large scale projects may get muddled as you can stack objects upon objects without necessarily knowing their origin or execution.