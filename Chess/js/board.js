
function pceIndex(pce,pceNum) {

	return (pce * 10 + pceNum);

}


var gameBoard = {};

// Represents the virtual board itself.
gameBoard.pieces = new Array (BRD_SQ_NUM);

//Board sets side players is on.
gameBoard.side = COLOR.WHITE;

// Player can claim draw if in the last 50 moves there has been no captures or pawn moves. 
gameBoard.fiftyMove = 0;

//This keeps a counter of every move made in the game by either side.
gameBoard.plays = 0;

// Number of moves made in the algorithmic search tree
gameBoard.algoPlays = 0;

// You can only castle if the king and the rooks are in their starting position and have not moved.
gameBoard.castlePerm = 0;

//Holds value of the pieces.

gameBoard.material = new Array (2);


//Array which keeps track of piece #

gameBoard.pceNum = new Array(13);


//Keeps track of the pieces of board and curtails the array loop depending on the pieces.
gameBoard.pList = new Array(14 * 10);


gameBoard.posKey = 0;




