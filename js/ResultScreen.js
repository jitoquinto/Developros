/*
    This is the screen that plays the neurotransmitter game
    I honor you, reader of comments! 
*/

var InstructionState = function(phGame) {
    this.name = "RESULTSTATE";
    this.game = phGame;

    //this.game.load.image();   
}

ResultState.prototype = Object.create(GameState.prototype);


function preload(){
	
}