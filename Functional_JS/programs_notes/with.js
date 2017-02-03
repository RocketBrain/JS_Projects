//using with

var Troll = {
	internet: "many",
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