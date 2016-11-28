
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

//one row = 8 squares horizonally
//one column = 8 squares vertically

/*Imagine a chess board and its 8 row x 8 column grid totalling 64 squares:
 1)The entire 8 square span of each row corresponds to a Rank between 0 and 7
 2)If we start with row 0, then all 8 ranks on that horizonal row will be set to 0
  a) The same applies for each row thereafter corresponding to its rank number.


3)The knight's ability to go offboard is accounted for by adding two rows below Rank 7, and two rows above Rank 0. 
  These provide border squares in each corner of the square grid. We only have to add one column on either side of the 64 square 
  grid because the knight will wrap around the board if he goes offboard on either side. 
  No borders are needed on the sides, only the top and bottom.
  */


var filesBoard = new Array(BRD_SQ_NUM);
var ranksBoard = new Array(BRD_SQ_NUM);





/* The positionFinder function adds the appropriate square number to our files and ranks. */ 


function positionFinder(file,rank) {

	return ( (21 + (file) ) + ( (rank) * 10));

}



var pieceBig = [ BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE ];
var pieceMaj = [ BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE ];
var pieceMin = [ BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE ];

//pawn,bishop,knight,rook,queen,king
var pieceVal= [ 0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000  ];
var pieceCol = [ COLORS.BOTH, COLORS.WHITE, COLORS.WHITE, COLORS.WHITE, COLORS.WHITE, COLORS.WHITE, COLORS.WHITE,
	COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK ];
	
var piecePawn = [ BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE ];	
var pieceKnight = [ BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE ];
var pieceKing = [ BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE ];
var pieceRookQueen = [ BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE ];
var pieceBishopQueen = [ BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE ];
var pieceSlides = [ BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE ];
