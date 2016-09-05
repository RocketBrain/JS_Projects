
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


//Total # of squares. Number is greater than 64 to account for pieces moving off board.
var BRD_SQ_NUM = 120;


// Files are the squares that move vertically. Each file has a position which will eventually be relayed back to an array. 
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
	
/*Ranks are the horizontal number of squares. There are 8 ranks going across, followed by 8 vertical files.	
8x8 = total of 64 squares.
*/

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
	
var COLORS = { 
	WHITE:0, 
	BLACK:1, 
	BOTH:2 
};

// Related to castlePerm and whether or not these particular pieces have moved.

var CASTLEBIT = {WKCA: 1, WQCA: 2, BKCA: 4, BQCA : 8};




// 21 is equal to a rank and file of 0. If anything is on 100, that means it is off the board.
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



/*Imagine a board that has eight of the following going across: 00000000,11111111,22222222,33333333,44444444,55555555,66666666,77777777
for a total of 64 squares.


We have to account for the knight going off the board by two pieces either above or below the 64 squares, which is why we increase the board to 120.
We have increased the movable square numbers to be 21-98. Anything on 100 is "off" which accounts for the knight piece on top and bottom positions. 
*/


var filesBoard = new Array(BRD_SQ_NUM);
var ranksBoard = new Array(BRD_SQ_NUM);





/* The positionFinder function adds the appropriate array to our theoretical model of repeating numbers. 
 What is at the first file and rank of 0, is really 21 due to the total number of pieces being 120*/ 


function positionFinder(file,rank) {

	return ( (21 + (file) ) + ( (rank) * 10));

}