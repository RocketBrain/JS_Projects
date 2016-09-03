$(function() {
	console.log("Main Init Called");
	initFilesRanksBrd();

});

function init() {

	console.log ("init() called");
	
}


// This function "initializes" each of our definitions so that they are start at 0 and are able to loop accordingly.
function initFilesRanksBrd() {

	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;



// Creating loops which go through entire board and puts them into each array

//This one is clearing the entire board and putting it into "offboard."

	for (index = 0; index < BRD_SQ_NUM; ++index) {
	filesBoard[index] = SQUARES.OFFBOARD;
	ranksBoard[index] = SQUARES.OFFBOARD;
	}

	//This loop initializes each rank and file to 0, each rank and file is then mathematically converted from the positionFinder function into the filesBoard and ranksBoard array.

	for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {

		for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {

			sq = positionFinder(file,rank);
			filesBoard[sq] = file;
			ranksBoard[sq] = rank;
		}
	}


	// Doing a console.log at this poing to make sure everything is printing and functions are working.

	console.log("filesBoard[0]: " + filesBoard[0] + " ranksBoard[0]: " + ranksBoard[0]);

	console.log("filesBoard[SQUARES.A1]: " + filesBoard[SQUARES.E8] + " ranksBoard[SQUARES.E8]: " + ranksBoard[SQUARES.E8]);
}









