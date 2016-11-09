$(function() {
	console.log("Main Init Called");
	initFilesRanksBrd();

});

function init() {

	console.log ("init() called");
	
}


// This function "initializes" each of our definitions so they start at 0 and are able to loop accordingly.
function initFilesRanksBrd() {

	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;



// Creating loops which go through entire board and puts them into each array


	// index goes through filesBoard and ranksBoard and sets the results to SQUARES.OFFBOARD
	for (index = 0; index < BRD_SQ_NUM; ++index) {
	filesBoard[index] = SQUARES.OFFBOARD;
	ranksBoard[index] = SQUARES.OFFBOARD;
	}

	/* Each rank and file is mathematically converted 
	from the positionFinder function into the filesBoard and ranksBoard array.*/

	for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {

		for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {

			sq = positionFinder(file,rank);
			filesBoard[sq] = file;
			ranksBoard[sq] = rank;
		}
	}


	// Doing a console.log at this point to make sure everything is printing and functions are working.

	console.log("filesBoard[0]: " + filesBoard[0] + " ranksBoard[0]: " + ranksBoard[0]);

	console.log("filesBoard[SQUARES.A1]: " + filesBoard[SQUARES.E8] + " ranksBoard[SQUARES.E8]: " + ranksBoard[SQUARES.E8]);

	 positionFinder(); 
}









