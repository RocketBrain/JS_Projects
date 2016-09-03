
//Using pieces as an object, rather than calling each piece directly. Example: if x == pieces.wN

var pieces = { 

	EMPTY: 0,
	wP: 1,
	wN: 2,
	wB: 3,
	wR: 4,
	wQ: 5,
	wK: 6,
	bP: 7,
	bN: 8,
	bB: 9,
	bR: 10,
	bQ: 11,
	bK: 12
};


//Total # of squares. Number is greater than 64 to make moving on the board much easier.
var BRD_SQ_NUM = 120;

var FILES =  { 
	FILE_A:0, 
	FILE_B:1, 
	FILE_C:2, 
	FILE_D:3, 
	FILE_E:4, 
	FILE_F:5, 
	FILE_G:6, 
	FILE_H:7,
	FILE_NONE:8 
};
	
var RANKS =  { 
	RANK_1:0, 
	RANK_2:1, 
	RANK_3:2, 
	RANK_4:3, 
	RANK_5:4, 
	RANK_6:5, 
	RANK_7:6, 
	RANK_8:7, 
	RANK_NONE:8 
};
	
var COLOURS = { 
	WHITE:0, 
	BLACK:1, 
	BOTH:2 
};


var SQUARES = {
  A1:21, 
  B1:22, 
  C1:23, 
  D1:24, 
  E1:25, 
  F1:26, 
  G1:27, 
  H1:28,  
  A8:91, 
  B8:92, 
  C8:93, 
  D8:94, 
  E8:95, 
  F8:96, 
  G8:97, 
  H8:98, 
  NO_SQ:99, 
  OFFBOARD:100
};

var BOOL = { 
	FALSE:0, 
	TRUE:1 
};



//Imagine a board that has eight of the following going across: 00000000,11111111,22222222,33333333,44444444,55555555,66666666,77777777

//Now, anything outside of that, is off the board.

//We have to account for the knight going off the board by two pieces either above or below the 64 squares, which is why we increase the board to 120.

//It is easier to visualize the number 100 as being "off the board" hence why we repeat it throughout the entire "off" portion of the board. Of course, each number represents a different position.


var filesBoard = new Array(BRD_SQ_NUM);
var ranksBoard = new Array(BRD_SQ_NUM);

// By using the positionFinder function, we can add the appropriate array to our theoretical model of repeating numbers. 
//What is at the first file and rank of 0, is really 21. 


function positionFinder(file,rank) {

	return ( (21 + (file) ) + ( (rank) * 10));

}