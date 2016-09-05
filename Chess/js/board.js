var gameBoard = {};

gameBoard.pieces = new Array (BRD_SQ_NUM);
gameBoard.side = COLOR.WHITE;

// Player can claim draw if in the last 50 moves there has been no captures or pawn moves. 
gameBoard.fiftyMove = 0;

//This keeps a counter of every move made in the game by either side.
gameBoard.plays = 0;

// Number of moves made in the aglorithmic search tree
gameBoard.algoPlays = 0;

// You can only castle if the king and the rooks are in their starting position and have not moved.
gameBoard.castlePerm = 0;




