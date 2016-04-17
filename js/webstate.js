/* 
	Passed between screens, shares infor about current state.
	Read the commetns. Have a great day!

*/

var SiteState = function (phgame){
	this.name = "UNSET";
	this.game = phgame;
};

GameState.prototype.enable = function() {};
GameState.prototype.tick = function() {};
GameState.prototype.disable = function() {};