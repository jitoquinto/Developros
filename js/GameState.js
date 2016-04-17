/* 
	Passed between screens, shares info about current state.
	Read the comments. Have a great day!

*/

var GameState = function (phgame){
	this.name = "UNSET";
	this.game = phgame;
	//this.whichGame = "NONE";
};

GameState.prototype.enable = function() {};
GameState.prototype.tick = function() {};
GameState.prototype.disable = function() {};